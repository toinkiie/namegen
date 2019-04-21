import { ListOptions } from '@namegen/app/models/list-options.model';

export class Regions {

  private listOptions: ListOptions[] = [
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Germany ', value: 'DE' },
    { label: 'Denmark ', value: 'DK' },
    { label: 'Finland', value: 'FI' },
    { label: 'France', value: 'FR' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'Ireland', value: 'IE' },
    { label: 'Iran', value: 'IR' },
    { label: 'Norway', value: 'NO' },
    { label: 'Netherlands', value: 'NL' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'Switzerland ', value: 'CH' },
    { label: 'Turkey', value: 'TR' },
    { label: 'United States', value: 'US' }
  ];

  getListOptions(): ListOptions[] {
    return this.listOptions;
  }
}
