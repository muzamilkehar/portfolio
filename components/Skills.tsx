import { skillIcons, skillColors } from "@/lib/skillIcons";
import { skillGroups } from "@/lib/data";


export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
          Skills & technology
        </h2>
        <p className="mt-3 text-muted">
          What I reach for when building web and mobile products, grouped by
          where it sits in the stack.
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm text-signal">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded border border-border px-3 py-1.5 text-sm text-paper"
                  >
                    
                    {Icon && (
                    <Icon
                    size={16}
                    style={{ color: skillColors[skill] ?? "#8FA0A3" }}
                  />
                    )}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}