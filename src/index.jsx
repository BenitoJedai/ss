import { contentView, TextInput, WebView } from 'tabris';

contentView.append(
  <$>
    <WebView stretchX bottom top='prev() 8' />
  </$>
);

function loadUrl() {
  $(WebView).only().url = "https://google.com";
}

loadUrl();
