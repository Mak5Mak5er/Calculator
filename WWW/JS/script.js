$(document).ready(function() {
    const MAX_LENGTH = 26;
    const specialChars = ["+", "-", "x", "÷"]
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
                if (specialChars.every(function(c) { return !value.endsWith(c) })) add(btnValue);
                break;

            case ")":
            case "(":
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
                } else if (value.length < MAX_LENGTH) {
                    add(btnValue)
                }

        }
    })

});