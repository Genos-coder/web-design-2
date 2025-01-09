const rootContainer = document.getElementById("root");

function createElement(elemObj, root) {
  console.log(elemObj);
  const elemNode = document.createElement(elemObj.type);
  console.log(elemNode);
  elemNode.innerHTML = elemObj.props.children;
  for (let attr in elemObj.props) {
    if (attr === "children") continue;
    elemNode.setAttribute(attr, elemObj.props[attr]);
  }
  {
  }
  root.appendChild(elemNode);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
    children: "Visit to google.com",
  },
};

createElement(reactElement, rootContainer);

1 + 1 == 2;
1 + 1 === 2;
