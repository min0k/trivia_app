export default function decoder(input) {
    return input.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }