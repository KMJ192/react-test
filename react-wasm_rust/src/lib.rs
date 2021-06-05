use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("{}", name));
}

#[wasm_bindgen]
pub fn output_string() -> String {
    let test = String::from("wasm with react");
    test
}