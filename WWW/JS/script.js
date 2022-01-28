$(document).ready(function() {

    $(".btn").on("click", function() {
        var text = $(".text-field")
        var value = text.val()
        var btnValue = $(this).val()

        function add(v) {
            text.val(value + v);
        }
        switch (btnValue) {
            case "+":
                if (!value.endsWith("+")) add("+")
                break;
            case "-":
                if (!value.endsWith("-")) add("-")
                break;
            case "x":
                if (!value.endsWith("x")) add("x")
                break;
            case "÷":
                if (!value.endsWith("÷")) add("÷")
                break;
            case ")":
                if (!value.endsWith(")")) add(")")
                break;
            case "(":
                if (!value.endsWith("(")) add("(")
                break;

            case "C":
                text.val("0")
                break;
            case "←":
                if (value.length > 1) {
                    text.val(value.slice(0, -1));
                } else text.val("0")
                break;
            case ".":
                if (!value.includes(".")) add(".")
                break;
            case "0":
                if (value !== '0') add("0")
                break;
            default:
                if (value === "0") {
                    text.val(btnValue)
                } else if (value.length < 25) {
                    add(btnValue)
                }

        }
    })

});