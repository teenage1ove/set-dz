import { Character, Team } from "../app";

describe("Team", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it("should add a character to the team", () => {
    const character = new Character("Кирилл");
    team.add(character);
    expect(team.members.has(character)).toBe(true);
  });

  it("should throw an error if adding a duplicate character", () => {
    const character = new Character("Кирилл");

    team.add(character);

    expect(() => team.add(character)).toThrow("Такой персонаж уже есть");
  });

  it("should add multiple characters to the team", () => {
    const character1 = new Character("Иван");
    const character2 = new Character("Андрей");

    team.addAll(character1, character2);

    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
  });

  it("should return an array of team members", () => {
    const character1 = new Character("Иван");
    const character2 = new Character("Андрей");

    team.addAll(character1, character2);

    expect(team.toArray()).toEqual([character1, character2]);
  });
});

