import re

raw_data_file = "./tools/raw_data.txt"
output_file = "./tools/output.txt"
output_light_file = "./tools/output-light.txt"

option_rgx = re.compile(r"^[a-z]\)")
clean_begin = re.compile(r"^[^[a-zA-Z]*")

duplicates = []
total_count = 0


def get_choices(choices):
    res = "["

    for answer in choices:
        res += f"\"{re.sub(option_rgx, '', answer).strip()}\", "
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
                           f"title: \"{title}\",\nchoices: {get_choices(choices)},\nsolution: \"\",\nexplanation: \"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"\n" + "},\n", title)
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
    temp = ""
    last = 0

    lines = r.readlines()
    r.close()
    lines_count = len(lines)
    print(f"Parsing {lines_count} lines")

    for index, line in enumerate(lines, start=0):
        line = line.lstrip()

        if line.strip() == "":
            res += "\n"
            continue
        if line.strip() == "###BREAKPOINT###":
            res += temp
            break
        if line[0] == "#":
            continue
        if re.search(option_rgx, line):
            res += line + "\n"
            line = line.strip()
            temp = line
            continue
        if line[0].islower():
            temp += line
            continue
        res += line
        temp = ""

    o.write(res)
    o.close()
    return res


def add(value, title):
    title = re.sub(re.compile(r"[^\x00-\x7F]*"), "", title.lower()).strip()
    global total_count
    global duplicates

    total_count += 1
    if title in duplicates:
        return ""
    duplicates.append(title)
    return value


parse()
