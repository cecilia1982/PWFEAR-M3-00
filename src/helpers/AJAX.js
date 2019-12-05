class AJAX {
  async getData(url) {
    let data,
      objects = null;

    if (!localStorage.getItem("PRODUCTOS")) {
      data = await fetch(url); //esto es bloqueante
      objects = await data.json();
      await localStorage.setItem("PRODUCTOS", JSON.stringify(objects));
    } else {
      data = await localStorage.getItem("PRODUCTOS");
      objects = await JSON.parse(data);
    }

    return objects;
  }
}

export default AJAX;
