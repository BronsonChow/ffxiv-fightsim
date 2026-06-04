// Directory path
const rootPath = '../';
const path = window.location.pathname;
const segments = path.split('/').filter(segment => segment.length > 0);
let depth = segments.length;
if (depth > 6) { depth -= 7; } // personal machine
const dupeDirCopy = rootPath.repeat(depth);

const navbarHTML =
`
<nav class="navbar navbar-expand-md fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="${dupeDirCopy}index.html">
            <img class="navbar-icon" src="${dupeDirCopy}assets/ffxivsim-logo-navbar.svg" alt="FFXIV Sim">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="${dupeDirCopy}content/unity/unity.html">Unity Sim</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div style="margin:4rem"></div>
`;
document.getElementById("nav").insertAdjacentHTML(`afterbegin`, navbarHTML);