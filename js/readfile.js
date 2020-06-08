  onInput(dunno) {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
    }
    reader.readAsText(dunno.files[0]);
  }