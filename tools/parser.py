import re

raw_data_file = "./tools/raw_data.txt"
output_file = "./tools/output.txt"
output_light_file = "./tools/output-light.txt"

option_rgx = re.compile(r"^[a-d]\)")
clean_begin = re.compile(r"^[^[a-zA-Z]*")
clean_ast = re.compile(r"^[\*]*|[\*]*$")

duplicates = []
total_count = 0
qid = 1


def get_choices(choices):
    res = "["

    for answer in choices:
        res += f"\"{re.sub(clean_ast, '', re.sub(option_rgx, '', answer).strip())}\", "
    if len(res) > 2:
        res = res[:-2]
    return res + "]"


def parse():
    o = open(output_file, "w")
    res = "[\n"
    title = ""
    choices = []
    lines = light_parse().split("\n")
    last = 0

    for line in lines:
        line = line.replace("\"", "\\\"")
        if line == "":
            continue
        elif re.search(option_rgx, line):
            if last == 1:
                title = re.sub(clean_begin, "", title).strip()
            choices.append(line.strip())
            last = 0
        else:
            if last == 0 and title != "":
                res += add("{\n" +
                           f"id: {qid},\ntitle: \"{title}\",\nchoices: {get_choices(choices)},\nsolution: \"\",\nexplanation: \"\"\n" + "},\n", title, get_choices(choices))
                title = ""
                choices = []
            last = 1
            title += line
            continue
    res += "]\n"
    o.write(res)
    o.close()
    print(f"Found {len(duplicates)} questions ({round(((len(duplicates) / total_count) * 1000)) / 100}% were duplicates)")


def light_parse():
    r = open(raw_data_file, "r")
    o = open(output_light_file, "w")
    res = ""
    final = ""
    temp = ""
    prevWasD = False

    lines = r.readlines()
    r.close()
    lines_count = len(lines)
    print(f"Parsing {lines_count} lines")

    for index, line in enumerate(lines, start=0):
        line = line.lstrip()

        if line.strip() == "":
            if prevWasD:
                res += temp.replace("\\n", " ") + "\n"
                temp = ""
                prevWasD = False
            res += "\n"
            continue
        if line.strip() == "###BREAKPOINT###":
            break
        if line[0] == "#":
            continue
        if re.search(option_rgx, line):
            if line.startswith("d)"):
                prevWasD = True
            res += temp.replace("\\n", " ") + "\n"
            temp = line
            continue
        temp += line

    temp = ""
    prevWasD = False
    for index, line in enumerate(res.split("\n"), start=0):
        line = line.lstrip()

        if line.strip() == "":
            if prevWasD:
                final += temp.replace("\\n", " ") + "\n"
                temp = ""
                prevWasD = False
            final += "\n"
            continue
        if line.strip() == "###BREAKPOINT###":
            break
        if line[0] == "#":
            continue
        if re.search(option_rgx, line):
            if line.startswith("d)"):
                prevWasD = True
            final += temp.replace("\\n", " ") + "\n"
            temp = line
            continue
        temp += line
    o.write(final)
    o.close()
    return final


def add(value, title, choices):
    title = re.sub(re.compile(r"[^\x00-\x7F]*"), "", title.lower()).strip()
    choices = re.sub(re.compile(r"[^\x00-\x7F]*"), "", choices.lower()).strip()
    global total_count
    global duplicates
    global qid

    total_count += 1
    if title + choices in duplicates :
        return ""
    qid += 1
    duplicates.append(title + choices)
    return value


parse()
