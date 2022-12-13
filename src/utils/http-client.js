import axios from "axios";

/**
 * The Httpclient settings
 * @typedef {Object} HttpClientProps
 * @property {string} traceId - Indicates whether the Courage component is present.
 * @property {string} baseUrl - Indicates whether the Power component is present.
 * @property {import('axios').AxiosInstance} client - Indicates whether the Wisdom component is present.
 * @property {string} batseguroToken - Indicates whether the Wisdom component is present.
 */

const { CHECKOUT_ORCHESTRATOR_URL = "" } = process.env;

export class HttpClient {
  #traceId = "";
  #baseUrl = "";
  #client = {};
  #batseguroToken = "";

  /**
   * @param {HttpClientProps} props
   */
  constructor(props) {
    this.#traceId = props.traceId;
    this.#baseUrl = props?.baseUrl ?? CHECKOUT_ORCHESTRATOR_URL;
    this.#client = props.client;
    this.#batseguroToken = props.batseguroToken;
  }

  setup() {
    this.client = axios.create({
      headers: {
        Authorization: `Bearer ${this.batseguroToken}`,
        "x-b3-traceid": this.#traceId,
      },
    });

    return this;
  }

  setTraceId(traceId = "") {
    this.#traceId = traceId;

    return this;
  }

  #buildUrl({ path = "", options = { params: [] } }) {
    const url = new URL(this.#baseUrl);
    url.pathname = path;

    return url.toString();
  }

  async get({ path = "", params = {} }) {
    const response = await this.client({
      method: "GET",
      url: this.#buildUrl({ path }),
      params: params,
    });

    return response.data;
  }

  put({ path = "", options = {} }) {}

  patch({ path = "", options = {} }) {}

  post({ path = "", options = {} }) {}

  delete({ path = "", options = {} }) {}
}
