import { NetworkScannerOptions } from '@caldera-network/chia-network-scanner/dist/lib/utils/options';
import Configstore from 'configstore';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('../../../package.json', 'utf8'));

interface DefaultConfig extends NetworkScannerOptions {
    cloudflare: {
        apiToken: string;
        zoneId: string;

    }
}
// Create a Configstore instance.
const defaults: DefaultConfig = {
    cloudflare: {
        apiToken: '',
        zoneId: '',
    },
    startNodes: [
        { hostname: '1.1.1.1', port: 8620 },
        { hostname: '2.2.2.2', port: 8620 },
        { hostname: '3.3.3.3', port: 8620 },
    ],
    network: {
        networkId: 'mainnet',
        protocolVersion: '0.0.0',
        softwareVersion: '0.0.0',
    },
    peer: {
        nodeType: 1,
    },
    connectionTimeout: 2500,
    concurrency: 50,
    certPath: '/root/.caldera/mainnet/config/ssl/ca/caldera_ca.crt',
    keyPath: '/root/.caldera/mainnet/config/ssl/ca/caldera_ca.key',
}
export const config = new Configstore(packageJson.name, defaults);