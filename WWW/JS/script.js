$(document).ready(function() {
    const specialChars = ["+", "-", "x", "÷"]

    function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    function count(text, s) {
        const r = new RegExp(escapeRegExp(s), 'g');
        return (text.match(r) || []).length;
    }

    function endsWithSpecialChars(text) {
        return specialChars.some(function(c) { return text.endsWith(c) })
    }

    const MAX_LENGTH = 26;
    $(".btn").on("click", function() {
        var text = $(".text-field")
        var value = text.val()
        var btnValue = $(this).val()

        function add(v) {
            text.val(value + v);
        }
        switch (btnValue) {
            case "+":
            case "-":
            case "x":
            case "÷":
                if (!endsWithSpecialChars(value)) add(btnValue);
                break;

            case ")":
                if (count(value, "(") > count(value, ")") && !endsWithSpecialChars(value))
                    add(btnValue);
                break;
            case "C":
                text.val("0");
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
                } else if (value.length < MAX_LENGTH) {
                    add(btnValue)
                }

        }
    })

});