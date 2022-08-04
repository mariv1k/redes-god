import re

raw_data_file = "./tools/raw_data.txt"
output_file = "./tools/output.txt"
sanitise_file = "./tools/output-sanitised.txt"

option_rgx = re.compile(r"^[a-d]\)")
clean_begin = re.compile(r"^[^[a-zA-Z]*")
clean_ast = re.compile(r"^[\*]*|[\*]*$")

unique_questions = []
total_questions_amount = 0
qid = 1
file_line_count = 0


def choices_to_string(choices):
    o = "["

    for choice in choices:
        choice = re.sub(re.compile(r"\.+$"), '', choice)
        o += f"\"{re.sub(clean_ast, '', re.sub(option_rgx, '', choice).strip() + '.')}\", "
    if len(o) > 2:
        o = o[:-2]
    return o + "]"


def parse():
    fl = open(output_file, "w")
    o = "[\n"
    qtitle = ""
    qchoices = []
    lines = sanitise().split("\n")
    last = 0
    global file_line_count

    for line in lines:
        file_line_count += 1
        line = line.replace("\"", "\\\"")
        if line == "":
            continue
        elif re.search(option_rgx, line):
            if last == 1:
                qtitle = re.sub(re.compile(r"\.+$"), "",
                                re.sub(clean_begin, "", qtitle)).strip()
            qchoices.append(line.strip())
            last = 0
        else:
            if last == 0 and qtitle != "":
                o += add_question("{\n" +
                                  f"id: {qid},\ntitle: \"{qtitle}\",\nchoices: {choices_to_string(qchoices)},\nsolution: \"-\",\nexplanation: \"\"\n" + "},\n", qtitle, qchoices)
                qtitle = ""
                qchoices = []
            last = 1
            qtitle += line
            continue
    o += "]\n"

    print(f"Found {len(unique_questions)} questions ({round(((1 - len(unique_questions) / total_questions_amount) * 1000)) / 100}% were duplicates)")

    fl.write(o)
    fl.close()


def sanitise():
    rfl = open(raw_data_file, "r")
    sfl = open(sanitise_file, "w")
    o = ""
    final = ""
    temp = ""
    prev_was_d = False
    global total_lines

    lines = rfl.readlines()
    rfl.close()
    total_lines = len(lines)
    print(f"Parsing {total_lines} lines")

    for line in lines:
        line = line.lstrip()

        if line.strip() == "":
            if prev_was_d:
                o += temp.replace('\n', ' ') + "\n"
                temp = ""
                prev_was_d = False
            o += "\n"
            continue
        if line.strip() == "###BREAKPOINT###":
            break
        if line[0] == "#":
            continue
        if re.search(option_rgx, line):
            if line.startswith("d)"):
                prev_was_d = True
            o += ' '.join(temp.replace('\n', ' ').split()) + "\n"
            temp = line
            continue
        temp += line
    temp = ""
    prev_was_d = False

    for line in o.split("\n"):
        line = line.lstrip()

        if line.strip() == "":
            if prev_was_d:
                final += ' '.join(temp.replace('\n', ' ').split()) + "\n"
                temp = ""
                prev_was_d = False
            final += "\n"
            continue
        if line.strip() == "###BREAKPOINT###":
            break
        if line[0] == "#":
            continue
        if re.search(option_rgx, line):
            if line.startswith("d)"):
                prev_was_d = True
            final += ' '.join(temp.replace('\n', ' ').split()) + "\n"
            temp = line
            continue
        temp += line

    sfl.write(final)
    sfl.close()
    return final


def add_question(value, title, choices):
    title = re.sub(re.compile(r"[^a-z]"), "", title.lower()).strip()
    choices = list(map(lambda choice: re.sub(re.compile(
        r"[^a-z]"), "", choice.lower()).strip(), choices))
    global total_questions_amount
    global unique_questions
    global qid

    total_questions_amount += 1
    for unique_combinations in unique_questions:
        is_unique = True

        for unique_combination in unique_combinations:
            for choice in choices:
                if title + choice == unique_combination:
                    is_unique = False
        if not is_unique:
            return ""

    qid += 1
    unique_questions.append(list(map(lambda choice: title + choice, choices)))
    return value


parse()
