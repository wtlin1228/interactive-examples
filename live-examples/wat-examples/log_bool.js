var url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
}

WebAssembly.instantiateStreaming(fetch(url), {
  env: {log_bool}
});
