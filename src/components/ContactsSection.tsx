import { CONTACTS } from "@/constants/data";

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative w-full overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-stint text-6xl tracking-wider text-white md:text-7xl lg:text-8xl">
            Let&apos;s build together!
          </h2>
        </div>

        <div className="font-crimson flex flex-col items-center justify-center gap-6 text-lg font-bold tracking-wider text-white md:flex-row md:gap-16 md:text-xl">
          {CONTACTS.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 transition-colors hover:text-slate-300"
              >
                <Icon className="text-2xl" aria-hidden="true" />
                <span>{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
