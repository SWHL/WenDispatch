# Privacy Policy for WenDispatch

Effective date: 2026-09-19

WenDispatch is a Chrome extension for collecting, editing, and publishing blog articles.

## Local data

Drafts, article content, editing history, preferences, publishing account information, task logs, and any image-host credentials you enter are stored locally in your browser. WenDispatch does not send these records to developer-operated servers or sell them. Removing the extension or clearing its browser storage removes its local data; copies already published to other services remain subject to those services' controls.

## Network requests and sharing

- Collection reads the page you select and stores its article locally. Viewing articles with external images or other linked resources may request those resources from their original hosts.
- Account management checks login state with supported publishing platforms. Publishing, including a task you schedule, sends the selected article and images to the selected platforms using the session information needed for authentication.
- Newly inserted images are stored locally as data URLs by default. Selecting and configuring an image host uploads inserted images to that service, using your credentials. If you configure a proxy for that service, requests also pass through your chosen proxy. Visibility and retention depend on the destination service's settings and policy.
- The editor does not use AI services. PlantUML source is displayed as code and is not sent to a public rendering service. The extension does not use Native Messaging or connect to local helper programs.

## Permissions

- storage: Save drafts, preferences, accounts, and task state locally.
- scripting and host permissions: Collect content and operate the editors of supported publishing platforms.
- tabs and activeTab: Identify and operate tabs involved in collection, account management, and publishing.
- tabGroups: Group publishing tabs.
- cookies: Check the login state of supported blog platforms and authenticate publishing requests. Cookies are not sent to developer-operated servers.
- alarms: Run publishing tasks scheduled by the user.
- notifications: Show publishing results.
- sidePanel: Display the extension's side panel.
- clipboardWrite: Copy article text and formatted previews after the user requests it.

## Executable code

Executable code is included in the extension package. WenDispatch does not download remote JavaScript or WebAssembly to execute.

## Contact and updates

Source: https://github.com/SWHL/WenDispatch

Questions: https://github.com/SWHL/WenDispatch/issues

Policy changes will be published here with an updated effective date.
