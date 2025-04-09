# HTML 고도몰 Comment Semantic Highlighter

Highlights 고도몰 HTML comments like <!--{ ... }--> using semantic tokens.

이 익스텐션 설치했으면 settings.json에 아래 설정 추가
```json
{
    ...

    "editor.semanticTokenColorCustomizations": {
        "rules": {
            "godoComment": {
                "foreground": "#f472b6",
                "fontStyle": "bold"
            }
        }
    }
}

```
