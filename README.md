# CV Buider (CV_Buider_Reactjs)

> Build CV using AI LLM model & Front End using ReactJs.

---

## 🔗 Table of content
- [Description](#Description)
- [Timeline](#Timeline)
- [Technique](#Technique)
- [Structure Tree](#StructureTree)
- [Table Structure](#TableStructure)
- [Set-up & run](#Howtosetup-run)
- [Author](#Author)

---

## 📝 Description

- Project CV Builder FE is the Front-End of Project CV Builder using ReactJs and Vite, Support user for making CV easỉer and faster with LLM model (OpenAI model) and export as PNG, PDF. User can share their own CV.

---

## 📆 Timeline

- 2 Months, From 09/2025 - 10/2025

---

## 🔧 Technique

> Language:
  - HTML5
  - CSS3
  - Javascript
  - JSON (Javascript Object Notation)

> Framework:
  - ReactJs

> Library/Tool:
  - I18Next
  - Jquery, Ajax
  - Tailwindcss
  - html-to-image
  - html2canvas
  - jspdf
  - bcryptjs
  - crypto-js
  - dotenv
  - Redux
  - Vite
  - Eslint

---

## 🌲 Structure Tree

```bash
CVAI_FE_Reactjs
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── auth1.jpg
│   ├── auth2.jpg
│   ├── auth3.jpg
│   ├── auth4.jpg
│   ├── blue_cv.png
│   ├── business_cv.png
│   ├── classic_cv.png
│   ├── dark_cv.png
│   ├── en.png
│   ├── fr.png
│   ├── hi.png
│   ├── ja.jpg
│   ├── kr.png
│   ├── light_cv.png
│   ├── logo.png
│   ├── medic_cv.png
│   ├── polite_cv.png
│   ├── simple_cv.png
│   ├── user1.jpg
│   ├── user2.jpg
│   ├── user3.jpg
│   ├── vi.jpg
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── logo
│   │       └── logo.png
│   ├── components
│   │   ├── Button.jsx
│   │   ├── Comment.jsx
│   │   ├── Container.jsx
│   │   ├── FileUpload.jsx
│   │   ├── FilterCheckBox.jsx
│   │   ├── InputDate.jsx
│   │   ├── InputSelect.jsx
│   │   ├── InputText.jsx
│   │   ├── InputTextArea.jsx
│   │   ├── LinearContainer.jsx
│   │   ├── Loading.jsx
│   │   ├── Logo.jsx
│   │   ├── Pagination.jsx
│   │   ├── PopUpBox.jsx
│   │   ├── PostBig.jsx
│   │   ├── PostSampleComponent.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── SplitLine.jsx
│   │   ├── Stars.jsx
│   │   ├── Switch.jsx
│   │   └── User.jsx
│   ├── features
│   │   ├── account
│   │   │   ├── components
│   │   │   │   ├── Tab.jsx
│   │   │   │   └── TagInfo.jsx
│   │   │   ├── layouts
│   │   │   │   ├── AccountLayout.jsx
│   │   │   │   └── childs
│   │   │   │       ├── AccountChangePass.jsx
│   │   │   │       ├── AccountEdit.jsx
│   │   │   │       ├── AccountInfo.jsx
│   │   │   │       ├── AccountPost.jsx
│   │   │   │       ├── AccountPostSample.jsx
│   │   │   │       └── TabHead.jsx
│   │   │   ├── pages
│   │   │   │   └── Account.jsx
│   │   │   └── services
│   │   │       └── account.js
│   │   ├── auth
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── form
│   │   │   │   │   ├── login
│   │   │   │   │   │   └── LoginForm.jsx
│   │   │   │   │   └── register
│   │   │   │   │       └── RegisterForm.jsx
│   │   │   │   └── images
│   │   │   │       └── AuthImages.jsx
│   │   │   ├── pages
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   └── services
│   │   │       └── auth.js
│   │   ├── footer
│   │   │   ├── layouts
│   │   │   │   ├── FooterLayout.jsx
│   │   │   │   └── right
│   │   │   │       └── RightsLayout.jsx
│   │   │   └── pages
│   │   │       └── Footer.jsx
│   │   ├── header
│   │   │   ├── components
│   │   │   │   ├── HeaderSearchBar.jsx
│   │   │   │   └── NavEl.jsx
│   │   │   ├── layouts
│   │   │   │   ├── HeaderLayout.jsx
│   │   │   │   └── childs
│   │   │   │       └── HeaderNav.jsx
│   │   │   └── pages
│   │   │       └── Header.jsx
│   │   ├── home
│   │   │   ├── components
│   │   │   │   ├── ContactTag.jsx
│   │   │   │   ├── FeatureTag.jsx
│   │   │   │   ├── FilterRadio.jsx
│   │   │   │   ├── FilterRange.jsx
│   │   │   │   ├── HeaderInfoTag.jsx
│   │   │   │   ├── PriceTag.jsx
│   │   │   │   ├── QuestionBox.jsx
│   │   │   │   └── SupportTag.jsx
│   │   │   ├── layouts
│   │   │   │   ├── FeatureLayout.jsx
│   │   │   │   ├── HomeLayout.jsx
│   │   │   │   ├── HomeLayouts_childs
│   │   │   │   │   ├── HeaderLayout.jsx
│   │   │   │   │   └── HomeMainlayout.jsx
│   │   │   │   ├── PriceLayouts.jsx
│   │   │   │   └── SupportLayout.jsx
│   │   │   ├── pages
│   │   │   │   ├── Feature.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Price.jsx
│   │   │   │   └── Support.jsx
│   │   │   └── services
│   │   │       └── user.js
│   │   ├── library
│   │   │   ├── layouts
│   │   │   │   ├── 1_BlueModernPost.jsx
│   │   │   │   ├── 2_ClassicPost.jsx
│   │   │   │   ├── 3_CreativePost.jsx
│   │   │   │   ├── 4_SimplePost.jsx
│   │   │   │   ├── 5_BussinessPost.jsx
│   │   │   │   ├── 6_ITPost.jsx
│   │   │   │   ├── 7_PolitePost.jsx
│   │   │   │   └── 8_MedicalPost.jsx
│   │   │   └── pages
│   │   │       └── PostLibrary.jsx
│   │   ├── main
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   │   └── MainLayout.jsx
│   │   │   ├── pages
│   │   │   │   └── Main.jsx
│   │   │   └── services
│   │   ├── notification
│   │   │   ├── components
│   │   │   │   ├── Error.jsx
│   │   │   │   └── Success.jsx
│   │   │   └── layouts
│   │   │       └── NotificationLayout.jsx
│   │   ├── payment
│   │   │   ├── layouts
│   │   │   │   ├── PaymentLayouts.jsx
│   │   │   │   └── childs
│   │   │   │       ├── Error.jsx
│   │   │   │       ├── Pending.jsx
│   │   │   │       └── Success.jsx
│   │   │   └── pages
│   │   │       └── Payment.jsx
│   │   ├── post
│   │   │   ├── layouts
│   │   │   │   └── PostLayout.jsx
│   │   │   └── pages
│   │   │       └── Post.jsx
│   │   ├── postSample_list
│   │   │   ├── layouts
│   │   │   │   ├── PostSampleListLayout.jsx
│   │   │   │   └── childs
│   │   │   │       └── Filter.jsx
│   │   │   └── pages
│   │   │       └── PostSampleList.jsx
│   │   ├── post_workspace
│   │   │   ├── components
│   │   │   │   ├── AddNewBtn.jsx
│   │   │   │   ├── CrownsTop.jsx
│   │   │   │   ├── InputIcon_l.jsx
│   │   │   │   ├── InputIcon_r.jsx
│   │   │   │   ├── ListElement.jsx
│   │   │   │   ├── ListElementInput.jsx
│   │   │   │   ├── TextIcon_l.jsx
│   │   │   │   └── TextIcon_r.jsx
│   │   │   ├── layouts
│   │   │   │   └── PostWorkspaceLayout.jsx
│   │   │   ├── pages
│   │   │   │   └── PostWorkspace.jsx
│   │   │   └── services
│   │   │       ├── account.js
│   │   │       └── user.js
│   │   ├── postsample_workspace
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   │   └── PostSampleWorkspaceLayout.jsx
│   │   │   └── pages
│   │   │       └── PostSampleWorkspace.jsx
│   │   └── splash
│   │       ├── components
│   │       │   └── SplashLogo.jsx
│   │       ├── layouts
│   │       │   └── SplashLayout.jsx
│   │       └── pages
│   │           └── Splash.jsx
│   ├── i18n
│   │   ├── config.jsx
│   │   └── i18n.jsx
│   ├── index.css
│   ├── layouts
│   │   └── PostSampleList
│   │       └── List.jsx
│   ├── main.jsx
│   ├── redux
│   │   ├── I18nRedux.js
│   │   ├── NotificationRedux.js
│   │   └── store.js
│   ├── services
│   │   ├── AI.js
│   │   ├── post.js
│   │   ├── postSample.js
│   │   └── vnpay.js
│   ├── stylesheet
│   │   ├── base
│   │   │   └── base.css
│   │   ├── components
│   │   │   ├── checkbox1.css
│   │   │   └── font.css
│   │   └── vendor
│   │       └── vendor.css
│   └── utils
│       ├── common.jsx
│       └── mapping.js
└── vite.config.js
```

---

## 📁 Table Structure

| 📁 Folder / 📄 File | 🔍 Feature                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `services/`          | For call API Service with jQuery AJAX                                               |
| `assets/`            | Manage images                                                                       |
| `components/`        | Re-used components for whole project                                                |
| `layouts/`           | Re-used layouts for whole project                                                   |
| `i18n/`              | Config I18N for many languages                                                      |
| `mapping/`           | Manage all mapping logic                                                            |
| `feature/`           | Manage all routing respectively with pages, layouts                                 |
| `redux/`             | State management                                                                    |
| `stylesheet/`        | CSS folder management                                                               |
| `utils/`             | Manage all re-used function                                                         |
| `App.jsx`            | Initialize router, layout và main UI                                                |
| `main.jsx`           | File entry point React, render `<App />`                                            |

---

## ⚙️ How to setup & run

- Install nodejs from <https://nodejs.org/en/download>
- Initialize .env
- Go to cmd

```bash
git clone https://github.com/Quannichan/CV_Builder_Reactjs.git
npm install
npm run dev
```

- .env variables

```bash
VITE_BASE_URL_IMG=URL_BACKEND_FOR_IMAGE
VITE_BASE_URL=URL_BACKEND
```

---

## Author

- Quannichan
- 13/08/2004
- <tranminhquan130804@gmail.com>
- (+84)886523224 (vn)
