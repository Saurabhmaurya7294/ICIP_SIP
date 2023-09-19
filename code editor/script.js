function updateResult() {
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;
    var code = document.getElementById("code").contentWindow.document;

    code.open();
    code.writeln(
        "<html><head><style>" + css + "</style></head><body>" +
        html +
        "<script>" + js + "</script></body></html>"
    );
    code.close();
}

document.getElementById("html").addEventListener("keyup", updateResult);
document.getElementById("css").addEventListener("keyup", updateResult);
document.getElementById("js").addEventListener("keyup", updateResult);
