import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";

export function Locations() {
  const list = Object.values(locations);
  return (
    <section className="locations" id="locations">
      <div className="section-head">
        <span className="index">04</span>
        <p className="micro">Where we work</p>
      </div>
      <h2 className="display locations__title">
        On the ground in <em>Lagos</em> &amp; <em>Abuja</em>.
      </h2>
      <Reveal className="locations__grid" stagger={0.12}>
        {list.map((loc) => (
          <Link href={`/locations/${loc.slug}`} className="loc-card" key={loc.slug}>
            <div className="loc-card__media">
              <Image src={loc.img} alt={`Property managed by EFM in ${loc.name}`} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
            <div className="loc-card__body">
              <h3 className="loc-card__name display">{loc.name}</h3>
              <p className="loc-card__region micro micro--dim">{loc.region}</p>
              <p className="loc-card__intro">{loc.intro}</p>
              <span className="loc-card__link">
                Facility management in {loc.name} <ArrowIcon />
              </span>
            </div>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
