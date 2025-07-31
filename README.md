<div id="top">

# QUICK LLM

<!-- HEADER STYLE: COMPACT -->
<img src="icons/logo.svg" width="10%" align="left" style="margin-right: 15px">

<em>AI power, instantly in any text.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/htostes/quick-llm-extension?style=plastic&logo=opensourceinitiative&logoColor=white&color=blueviolet" alt="license">
<img src="https://img.shields.io/github/last-commit/htostes/quick-llm-extension?style=plastic&logo=git&logoColor=white&color=blueviolet" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/htostes/quick-llm-extension?style=plastic&color=blueviolet" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/htostes/quick-llm-extension?style=plastic&color=blueviolet" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=plastic&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">

<br clear="left"/>

</div>

## ⚛️ Table of Contents

<details>
<summary>Table of Contents</summary>

-   [⚛ ️ Table of Contents](#-table-of-contents)
-   [🔮 Overview](#-overview)
-   [💫 Features](#-features)
-   [🌌 Project Structure](#-project-structure)
    -   [✨ Project Index](#-project-index)
-   [⚡ Getting Started](#-getting-started)
    -   [💠 Prerequisites](#-prerequisites)
    -   [🔷 Installation](#-installation)
    -   [🔹 Usage](#-usage)
-   [⭐ License](#-license)

</details>

---

## 🔮 Overview

`quick-llm-extension` is a Chrome extension that seamlessly integrates large language models (LLMs) into your browser workflow, providing on-demand access to powerful text processing capabilities directly from your context menu.

**Why `quick-llm-extension`?**

This project simplifies LLM interaction for developers. The core features include:

-   🔶 **Seamless LLM Integration:** Integrates with OpenAI, Google, OpenRouter, and custom LLMs for flexible access to powerful AI capabilities.
-   🔷 **Context Menu Power:** Access grammar checking, summarization, explanation, and custom tasks directly from your browser's context menu.
-   🔶 **Customizable Prompts:** Tailor prompts for precise control over LLM responses, ensuring accurate and relevant results.
-   🔷 **Robust Error Handling:** Reliable API interaction with retry logic and exponential backoff for handling network errors and API issues.
-   🔶 **Open Source (GPLv3):** Freedom to share, modify, and redistribute, fostering community contribution and development.
-   🔷 **Configurable Settings:** Easily manage API keys, endpoints, models, and other settings via a user-friendly interface.

---

## 💫 Features

|     | Component         | Details                                                                                                                                                                                                           |
| :-- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Chrome extension architecture: manifest.json defines the extension's functionality.</li><li>Uses content scripts to interact with web pages.</li><li>Simple, single-page application structure.</li></ul> |
| 🔩  | **Code Quality**  | <ul><li>Code is relatively concise and easy to understand.</li><li>Lacks extensive comments.</li><li>No apparent use of linters or formatters.</li></ul>                                                          |
| 📄  | **Documentation** | <ul><li>Minimal documentation. README provides basic information.</li><li>No in-code documentation (JSDoc or similar).</li></ul>                                                                                  |
| 🔌  | **Integrations**  | <ul><li>Integrates with LLMs (likely via API calls, specifics not shown in provided context).</li><li>Interacts with web pages via content scripts.</li></ul>                                                     |
| 🧩  | **Modularity**    | <ul><li>Limited modularity; most code resides in a few files.</li><li>Could benefit from separating concerns into more distinct modules.</li></ul>                                                                |
| 🧪  | **Testing**       | <ul><li>No apparent automated tests.</li><li>Manual testing likely required.</li></ul>                                                                                                                            |
| ⚡️ | **Performance**   | <ul><li>Performance depends heavily on the LLM API's response time.</li><li>No performance optimization techniques are visibly implemented.</li></ul>                                                             |
| 🛡️  | **Security**      | <ul><li>Security considerations are not explicitly addressed in the provided context.</li><li>Vulnerable to potential XSS attacks if not carefully handling user inputs (if any).</li></ul>                       |
| 📦  | **Dependencies**  | <ul><li>Relies on external LLM APIs (unspecified).</li><li>Likely uses standard JavaScript libraries (unspecified).</li></ul>                                                                                     |
| 🚀  | **Scalability**   | <ul><li>Not designed for scalability; primarily a single-user extension.</li><li>Scalability depends on the underlying LLM API's capabilities.</li></ul>                                                          |

---

## 🌌 Project Structure

```sh
└── quick-llm-extension/
    ├── LICENSE
    ├── README.md
    ├── background.js
    ├── content.js
    ├── diff.min.js
    ├── icons
    │   ├── .gitkeep
    │   ├── icon128.png
    │   ├── icon16.png
    │   ├── icon32.png
    │   ├── icon48.png
    │   └── logo.svg
    ├── manifest.json
    ├── popup
    │   ├── .gitkeep
    │   ├── popup.html
    │   └── popup.js
    └── utils
        ├── .gitkeep
        ├── fetchLLM.js
        └── settings.js
```

### ✨ Project Index

<details open>
    <summary><b><code>QUICK-LLM-EXTENSION/</code></b></summary>
    <!-- __root__ Submodule -->
    <details>
        <summary><b>__root__</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ __root__</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/background.js'>background.js</a></b></td>
                    <td style='padding: 8px;'>- The background script integrates with a large language model (LLM) API<br>- It adds context menu items for grammar checking, summarization, explanation, and custom tasks<br>- Upon user selection, it sends text to the LLM, receives the response, and injects a script into the current tab to display the results<br>- Configuration options, including API key and prompt customization, are managed through settings<br>- Results are optionally copied to the clipboard.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/diff.min.js'>diff.min.js</a></b></td>
                    <td style='padding: 8px;'>- The <code>diff.min.js</code> file provides a minimized version of a diffing library (version 5.1.0) for the project<br>- Its purpose is to enable comparison of text-based data within the application, likely for features such as displaying changes between versions of documents or highlighting differences in code<br>- The minimized nature suggests an optimization for reduced file size and faster loading within the overall application.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/manifest.json'>manifest.json</a></b></td>
                    <td style='padding: 8px;'>- Manifest.json<code> configures the Quick LLM Chrome extension<br>- It defines the extensions metadata, including name, description, and version<br>- Crucially, it specifies permissions, icons, and the locations of core components like the background script (</code>background.js<code>), content script (</code>content.js<code>), and popup HTML (</code>popup.html`), enabling seamless integration with webpages for LLM interaction.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/LICENSE'>LICENSE</a></b></td>
                    <td style='padding: 8px;'>- The <code>LICENSE</code> file specifies that the project uses the GNU General Public License version 3<br>- This ensures the softwares freedom to share, modify, and redistribute, defining the legal framework for the entire codebases usage and distribution.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/content.js'>content.js</a></b></td>
                    <td style='padding: 8px;'>- Content.js` displays large language model responses within a browser extension<br>- It generates a dynamically styled popup containing the response, optionally highlighting grammatical changes<br>- The popup includes a close button and automatically disappears after 20 seconds<br>- Response types are indicated by a title, reflecting the LLM task (e.g., summarization, grammar check).</td>
                </tr>
            </table>
        </blockquote>
    </details>
    <!-- popup Submodule -->
    <details>
        <summary><b>popup</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ popup</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/popup/popup.html'>popup.html</a></b></td>
                    <td style='padding: 8px;'>- The popup.html file provides a user interface for configuring Large Language Model (LLM) settings<br>- It allows users to select an LLM provider, specify API endpoints and keys, choose models, and customize prompts<br>- The interface also includes options for copying responses to the clipboard and saving the configurations<br>- This settings panel enhances the overall user experience by centralizing LLM interaction parameters within the application.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/popup/popup.js'>popup.js</a></b></td>
                    <td style='padding: 8px;'>- The popup.js script configures a Chrome extensions user interface for selecting large language model providers (OpenAI, Google, OpenRouter, custom), endpoints, models, and API keys<br>- It saves user preferences to local storage, dynamically updating the UI based on provider selection to ensure appropriate fields are displayed and model options are populated<br>- The script facilitates easy management of API interaction settings.</td>
                </tr>
            </table>
        </blockquote>
    </details>
    <!-- utils Submodule -->
    <details>
        <summary><b>utils</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ utils</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/utils/fetchLLM.js'>fetchLLM.js</a></b></td>
                    <td style='padding: 8px;'>- The <code>fetchLLM.js</code> utility function facilitates interaction with a large language model API<br>- It reliably retrieves model responses by employing retry logic with exponential backoff, handling potential network errors or API issues<br>- The function sends prompts and input text to the specified API endpoint, receiving and returning the generated text content<br>- This ensures robust communication with the LLM within the broader application architecture.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/htostes/quick-llm-extension/blob/master/utils/settings.js'>settings.js</a></b></td>
                    <td style='padding: 8px;'>- Settings.js` retrieves user preferences, including API endpoint, model selection, API key, clipboard copy behavior, and custom prompt settings, from Chromes local storage<br>- It provides a function to asynchronously load these settings, supplying default values where necessary, for use throughout the application<br>- This ensures consistent access to configurable parameters.</td>
                </tr>
            </table>
        </blockquote>
    </details>
</details>

---

## ⚡ Getting Started

### 💠 Prerequisites

This project requires the following dependencies:

-   **Programming Language:** JavaScript

### 🔷 Installation

Build quick-llm-extension from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/htostes/quick-llm-extension
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd quick-llm-extension
    ```

3. **Install the dependencies:**

echo 'INSERT-INSTALL-COMMAND-HERE'

### 🔹 Usage

Run the project with:

echo 'INSERT-RUN-COMMAND-HERE'

<!-- ### 🔸 Testing

Quick-llm-extension uses the {**test_framework**} test framework. Run the test suite with:

echo 'INSERT-TEST-COMMAND-HERE'

---

## 🌀 Roadmap

-   [x] **`Task 1`**: <strike>Implement feature one.</strike>
-   [ ] **`Task 2`**: Implement feature two.
-   [ ] **`Task 3`**: Implement feature three.

---

## ✴️ Contributing

-   **💬 [Join the Discussions](https://github.com/htostes/quick-llm-extension/discussions)**: Share your insights, provide feedback, or ask questions.
-   **🐛 [Report Issues](https://github.com/htostes/quick-llm-extension/issues)**: Submit bugs found or log feature requests for the `quick-llm-extension` project.
-   **💡 [Submit Pull Requests](https://github.com/htostes/quick-llm-extension/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
    ```sh
    git clone https://github.com/htostes/quick-llm-extension
    ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
    ```sh
    git checkout -b new-feature-x
    ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
    ```sh
    git commit -m 'Implemented new feature x.'
    ```
6. **Push to github**: Push the changes to your forked repository.
    ```sh
    git push origin new-feature-x
    ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
 </details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/htostes/quick-llm-extension/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=htostes/quick-llm-extension">
   </a>
</p>
</details>
 -->

---

## ⭐ License

Quick-llm-extension is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

## [![][back-to-top]](#top)

<!-- ## ✧ Acknowledgments

-   Credit `contributors`, `inspiration`, `references`, etc. -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
