import https from 'https';

let responseDataScheme: {
  status: string,
  message: string,
  result: string
};

export type ResponseDataScheme = typeof responseDataScheme;

export default class etherescanClient {
  readonly host = 'https://api.etherscan.io/api?';

  constructor(private apiKey: string) {
  }

  getAddressBalance(address: string): Promise<ResponseDataScheme> {
    const url = `${this.host}module=account&action=balance&address=${address}&tag=latest&apikey=${this.apiKey}`;

    return this.get(url);
  }

  private get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(JSON.parse(data));
        });

      }).on('error', (err) => {
        reject(err);
      });
    });
  }
};
