import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider: vscode.DocumentSemanticTokensProvider = {
    provideDocumentSemanticTokens(document) {
      const tokensBuilder = new vscode.SemanticTokensBuilder();
      const text = document.getText();
      const regex = /<!--\{[\s\S]*?\}-->/g;
      const lines = text.split(/\r?\n/);

      for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber];
        let match;
        while ((match = regex.exec(line))) {
          tokensBuilder.push(
            lineNumber,
            match.index,
            match[0].length,
            encodeTokenType("godoComment"),
            0
          );
        }
      }

      return tokensBuilder.build();
    }
  };

  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider(
      { language: 'html' },
      provider,
      legend
    )
  );
}

const tokenTypes = ["godoComment"];
const legend = new vscode.SemanticTokensLegend(tokenTypes);

function encodeTokenType(tokenType: string): number {
  const index = tokenTypes.indexOf(tokenType);
  return index === -1 ? 0 : index;
}

export function deactivate() {}
