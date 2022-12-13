class ProxyError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ProxyError"; // (2)
  }
}
