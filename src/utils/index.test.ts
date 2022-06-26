import { timeSince, capitalize, unique } from "./index";

jest.useFakeTimers().setSystemTime(new Date("2021-08-03T22:11:00.000Z"));
describe("utils", () => {
  describe("timeSince", () => {
    it("should return a string", () => {
      expect(typeof timeSince("2021-07-03T22:11:00.000Z")).toBe("string");
    });

    it("should return a string with the correct format", () => {
      expect(timeSince("2021-07-03T22:11:00.000Z")).toBe("1 month ago");
    });

    it("should return an empty string when given a bad date", () => {
      expect(timeSince("bad date")).toBe("");
    });
  });

  describe("capitalize", () => {
    it("should return a string", () => {
      expect(typeof capitalize("hello")).toBe("string");
    });

    it("should return a string with the correct format", () => {
      expect(capitalize("hello")).toBe("Hello");
    });
  });

    describe("unique", () => {
        const mockArr = ["en", "en", "fr", "cz", "cz", "cz"];
        const expectedArr = ["en", "fr", "cz"];

        it("should return array with only unique values", () => {
            expect(mockArr.filter(unique)).toEqual(expectedArr);
        });
    });
});
