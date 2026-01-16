import "./styles.css";
const buttons = [
        { btnText: "Aç", btnColor: "blue", iconClass: "fa-folder-open" },
        { btnText: "Düzenle", btnColor: "orange", iconClass: "fa-pen" },
        { btnText: "Sil", btnColor: "red", iconClass: "fa-trash" },
      ];
function IconButton(data){
  const button=document.createElement('button');
  button.classList.add("btn","btn-"+ data.btnColor);
  const icon=document.createElement('i');
  icon.classList.add(data.iconClass);
  button.appendChild(icon);
  const text = document.createTextNode( data.btnText);
  button.appendChild(text);
  return button;
}
const container=document.getElementById('icon-buttons');
buttons.forEach(button=>{
  const btn=IconButton(button)
  container.appendChild(btn);
})
