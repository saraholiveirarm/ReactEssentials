import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((el) => (
          // Using the spread operator works because the props in the CoreConcept component and the keys in the CORE_CONCEPTS variable have the same names
          // <CoreConcept image={el.image} description={el.description} title={el.title} />
          <CoreConcept {...el} key={el.title} />
        ))}
      </ul>
    </section>
  );
}
