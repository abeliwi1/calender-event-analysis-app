export function analyzeEvent(event: any) {
    const keywordsLowValue = ["sync", "standup", "status"];
    const keywordsHighEnergy = ["planning", "deep", "strategy"];

    let value = 3;
    let energy = 3;

    const title = event.title.toLowerCase();

    if (keywordsLowValue.some(k => title.includes(k))) value = 1;
    if (keywordsHighEnergy.some(k => title.includes(k))) energy = 4;

    const score = value * 2 - energy;
    const cancel = score < 2;

    return { ...event, value, energy, score, cancel };
}
