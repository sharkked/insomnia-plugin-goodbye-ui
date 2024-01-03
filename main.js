const id = "plugin-hide-header"

if (!document.getElementById(id)) {
	const style = document.createElement("style")
	style.setAttribute("id", id)
	style.setAttribute("type", "text/css")
	style.textContent = ".app-header { display:none !important; }"
	document.head.appendChild(style)
}
