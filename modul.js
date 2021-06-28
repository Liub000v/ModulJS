export function Json_File(f) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const obj = JSON.parse(this.responseText);

        var tag = [];
        var tag1 = [];

        var form = document.createElement(obj.name);
        for (let key4 in obj.attributes) {
            if (obj.attributes[key4] != "") {
                form.setAttribute(obj.attributes[key4], (obj.values[key4] != "") ? obj.values[key4] : obj.attributes[key4]);
            }
        }
        for (let key2 in obj.children) {
            tag[key2] = document.createElement(obj["children"][key2].name);

            var br = document.createElement("br");

            for (let key3 in obj["children"][key2].attributes) {
                if (obj["children"][key2].attributes[key3] != "") {
                    tag[key2].setAttribute(obj["children"][key2].attributes[key3], (obj["children"][key2].values[key3] != "") ? obj["children"][key2].values[key3] : obj["children"][key2].attributes[key3]);
                }
            }
            tag[key2].innerHTML = (obj["children"][key2]['content'] != "") ? obj["children"][key2]['content'] : "";


            form.appendChild(tag[key2]);
            form.appendChild(br);
            if (obj["children"][key2]['children'] != "") {
                for (let key5 in obj["children"][key2]["children"]) {
                    tag1[key5] = document.createElement(obj["children"][key2]["children"][key5].name);

                    // for (key6 in obj["children"][key2]["children"][key5].attributes) {
                    //     if (obj["children"][key2]["children"][key5].attributes[key6] != "") {
                    //         tag1[key5].setAttribute(obj["children"][key2]["children"][key5].attributes[key6], obj["children"][key2]["children"][key5].values[key6]);
                    //     }
                    // }
                    tag1[key5].innerHTML = (obj["children"][key2]["children"][key5]['content'] != "") ? obj["children"][key2]["children"][key5]['content'] : "";
                    tag[key2].appendChild(tag1[key5]);
                }
            }

            document.body.appendChild(form);
        }
    }
    xmlhttp.open("GET", f);
    xmlhttp.send();
}