import { timeSince, capitalize, unique } from "./index";

jest.useFakeTimers().setSystemTime(new Date("2021-08-03T22:11:00.000Z"));
describe("utils", () => {
  describe("timeSince", () => {
    it("should return a string", () => {
      expect(typeof timeSince("2021-07-03T22:11:00.000Z")).toBe("string");
    });

    it("should return a string with the correct format for 1 day ago", () => {
      expect(timeSince("2021-08-02T22:11:00.000Z")).toBe("1 day ago");
    });

    it("should return a string with the correct format for 2 days ago", () => {
      expect(timeSince("2021-08-01T22:11:00.000Z")).toBe("2 days ago");
    });

    it("should return a string with the correct format for 1 week ago", () => {
      expect(timeSince("2021-07-27T22:11:00.000Z")).toBe("1 week ago");
    });

    it("should return a string with the correct format for 2 weeks ago", () => {
      expect(timeSince("2021-07-20T22:11:00.000Z")).toBe("2 weeks ago");
    });

    it("should return a string with the correct format for 1 month ago", () => {
      expect(timeSince("2021-07-03T22:11:00.000Z")).toBe("1 month ago");
    });

    it("should return a string with the correct format for 2 months ago", () => {
      expect(timeSince("2021-06-03T22:11:00.000Z")).toBe("2 months ago");
    });

    it("should return a string with the correct format for 1 year ago", () => {
      expect(timeSince("2020-07-27T22:11:00.000Z")).toBe("1 year ago");
    });

    it("should return a string with the correct format for 2 years ago", () => {
      expect(timeSince("2019-07-27T22:11:00.000Z")).toBe("2 years ago");
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
