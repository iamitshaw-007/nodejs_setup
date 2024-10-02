export const prettierConfig = {
    printWidth: 100 /* Specify the line length that the printer will wrap on */,
    tabWidth: 4 /* Specify the number of spaces per indentation level */,
    useTabs: false /* Indent lines with tabs instead of spaces */,
    semi: true /* Print semicolons at the ends of statements */,
    singleQuote: true /* Use single quotes instead of double quotes */,
    quoteProps: "consistent" /* Change when properties in objects are quoted */,
    jsxSingleQuote:
        true /* Use single quotes instead of double quotes in JSX */,
    trailingComma: "all" /* Print trailing commas wherever possible */,
    bracketSpacing:
        false /* Do not print spaces between brackets in object literals */,
    jsxBracketSameLine:
        true /* Put the `>` of a multi-line JSX element at the end of the last line */,
    arrowParens:
        "avoid" /* Omit parentheses when possible in arrow functions */,
    proseWrap: "always" /* Wrap markdown text */,
    endOfLine: "crlf" /* Specify the line ending to use */,
    htmlWhitespaceSensitivity:
        "ignore" /* Ignore whitespace sensitivity in HTML */,
    vueIndentScriptAndStyle:
        true /* Indent contents of <script> and <style> tags in Vue files */,
    embeddedLanguageFormatting: "off" /* Disable formatting of embedded code */,
    insertPragma: true /* Insert @format marker at the top of files */,
    requirePragma:
        true /* Only format files that contain @format or @prettier comment */,
    overrides: [
        {
            files: "*.json",
            options: {
                tabWidth: 2 /* Use 2 spaces for indentation in JSON files */,
            },
        },
        {
            files: "*.md",
            options: {
                proseWrap:
                    "preserve" /* Preserve markdown text as-is in Markdown files */,
            },
        },
    ],
};
