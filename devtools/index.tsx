import myPanelHTML from "url:~/devtools/panel.html"

chrome.devtools.panels.create("My Panel", "", myPanelHTML)

function IndexDevtools() {
  return <></>
}

export default IndexDevtools
