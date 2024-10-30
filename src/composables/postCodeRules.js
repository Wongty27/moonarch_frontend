export function usePostcodeRules() {
  return [
    v => !!v || 'Postcode is required',
    v => /^.{5}$/.test(v) || 'Postcode must be 5 digits',
  ];
}