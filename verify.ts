import { modifiers, classes } from "./matches.ts";

// the object doesn't 

class Pog {
  readonly modifiers;
  readonly atoms;

  constructor(modifiers: Set<string>, atoms: Set<string>) {
    this.modifiers = modifiers;
    this.atoms = atoms;
  }

  protected isAtom(atom: string) {
    if (typeof atom !== "string") {
      throw new Error("Typeof atom !== string");
    }
    if (this.atoms.has(atom)) {
      return true;
    }
    return false;
  }

  protected isModifier(modifier: string) {
    if (typeof modifier !== "string") {
      throw new Error("Typeof modifier !== string");
    }
    if (this.modifiers.has(modifier)) {
      return true;
    }
    return false;
  }

  isValidToken(token: string) {
    if (typeof token !== "string") {
      throw new Error("Typeof token !== string");
    }
    if (this.isModifier(token)) {
      return true;
    }
    if (
      this.isAtom(token) ||
      this.isAtom(token.substring(0, token.indexOf("-"))) ||
      this.isAtom(token.substring(0, token.indexOf("-") + 1)) ||
      this.isAtom(token + '-')
    ) {
      return true;
    }
    return false;
  }

  protected formatString(str: string) {
    return str.replace(/\s\s+/g, " ").trim();
  }

  // This method adds the key to each value in the string and returns a string
  parseString(key: string, value: string, modifier = true) {
    return (
      key +
      (modifier ? ":" : "-") +
      this.formatString(value).replace(
        /\s+/g,
        " " + key + (modifier ? ":" : "-")
      )
    );
  }

  // This method adds the key to each item in the array and returns a string
  parseArray(
    key: string,
    arr: Array<string | Record<string, unknown>>,
    modifier = true
  ) {
    const acc: string[] = [];
    for (const element of arr) {
      if (typeof element === "string") {
        acc.push(this.parseString(key, element));
      } else if (element && typeof element === "object") {
        acc.push(key + (modifier ? ":" : "-") + this.parseObject(element));
      }
    }
    return acc.join(" ");
  }

  parseObject(obj: Record<string, unknown>, modifier = true) {
    // TODO: add error checking
    const acc: string[] = [];
    for (const [key, value] of Object.entries(obj)) {
      if (!value) continue;
      if (typeof value === "string") {
        acc.push(this.parseString(key, value));
        continue;
      }
      if (Array.isArray(value)) {
        acc.push(this.parseArray(key, value));
        continue;
      }
      if (typeof value === "object") {
        acc.push(
          key + modifier
            ? ":"
            : "-" + this.parseObject(value as Record<string, unknown>)
        );
        continue;
      }
    }
    return acc.join(" ");
  }

  public p(token: Record<string, unknown>) {
    return this.parseObject(token);
  }
}

const pog = new Pog(modifiers, classes);

console.log(
  pog.p({
    hover: "hovervalue",
    "bg-red-300": true,
    active: ["active1", "active2"],
    test: ["teststr", { testobj: "result" }, "teststr2"],
  })
);

class PogElements extends Pog {
  parseProps(props: Record<string, unknown>) {
    const acc: string[] = [];
    for (const [key, value] of Object.entries(props)) {
      if (this.isValidToken(key)) {
        if (typeof value === "boolean") {
          acc.push(key);
        }
        if (Array.isArray(value)) {
          acc.push(this.parseArray(key, value, this.isModifier(key)));
        }
        if (typeof value === "string") {
          acc.push(this.parseString(key, value, this.isModifier(key)));
        }
        if (typeof value === "object") {
          acc.push(
            key +
              (this.isModifier(key) ? ":" : "-") +
              this.parseObject(value as Record<string, unknown>)
          );
        }
      }
    }
    return acc;
  }
}

const pe = new PogElements(modifiers, classes);

