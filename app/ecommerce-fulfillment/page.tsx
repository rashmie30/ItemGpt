import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  ClipboardCheck,
  PackageCheck,
  RefreshCcw,
  Route,
  Warehouse,
} from "lucide-react";
import styles from "./page.module.css";

const contactUrl = "https://www.unisco.com/contact-us";
const locationsUrl = "https://www.unisco.com/locations";

export const metadata: Metadata = {
  title: "Ecommerce Fulfillment Services | UNIS",
  description:
    "Connect B2C and B2B fulfillment, inventory, returns, and transportation with UNIS ecommerce logistics solutions for growing brands.",
};

const capabilities = [
  { icon: Warehouse, number: "01", title: "Receiving and inventory", copy: "Coordinate inbound receiving, storage, and inventory workflows around your products, order profile, and channel needs." },
  { icon: PackageCheck, number: "02", title: "B2C, B2B, and retail fulfillment", copy: "Build a fulfillment operation for direct-to-consumer orders, wholesale shipments, and retailer-specific routing and compliance requirements." },
  { icon: Route, number: "03", title: "Transportation coordination", copy: "Connect warehouse execution with transportation services so inbound and outbound freight move through one operating plan." },
  { icon: RefreshCcw, number: "04", title: "Returns", copy: "Plan the reverse flow for returned products, from receipt and inspection through the next disposition step defined by your team." },
];
const fitSignals = ["You fulfill direct-to-consumer and wholesale orders from shared inventory.", "Retail routing, labeling, or delivery requirements are adding complexity.", "Growth is putting pressure on receiving, storage, or returns workflows.", "You need fulfillment and transportation teams working from one plan."];
const onboarding = [["Discover", "Map channels, order profiles, inventory, integrations, and operating requirements."], ["Design", "Define the facility fit, workflows, data connections, and implementation responsibilities."], ["Validate", "Test agreed order, inventory, shipping, and exception scenarios before launch."], ["Launch", "Transition operations with clear ownership, communication paths, and review points."]];
const faqs = [
  { question: "Can UNIS support both B2C and B2B fulfillment?", answer: "This assessment is designed for brands balancing direct-to-consumer, wholesale, and retail-compliant fulfillment. UNIS will confirm the right operational fit for your channel mix and requirements during discovery." },
  { question: "How are ecommerce systems connected?", answer: "UNIS publishes integration capabilities for major ERP systems using API, XML, and EDI connectivity. The specific connection design depends on your systems and is confirmed during implementation planning." },
  { question: "Can transportation be included with fulfillment?", answer: "UNIS offers transportation alongside warehousing and fulfillment services. The assessment identifies where coordinated inbound or outbound transportation belongs in your operating plan." },
  { question: "What happens during a fulfillment assessment?", answer: "The starting point is your channel mix, products, inventory flow, systems, transportation needs, returns, and launch priorities. UNIS can then determine solution and location fit without assuming a one-size-fits-all design." },
];
function UnisLogo() { return <span className={styles.logo} aria-label="UNIS"><span>u</span><span>n</span><span>i</span><span>s</span></span>; }
export default function EcommerceFulfillmentPage() { return <main className={styles.page}>
  <header className={styles.header}><Link className={styles.brand} href="/ecommerce-fulfillment" aria-label="UNIS ecommerce fulfillment home"><UnisLogo /></Link><nav className={styles.nav} aria-label="Ecommerce fulfillment navigation"><a href="#capabilities">Capabilities</a><a href="#network">Network</a><a href="#process">Process</a><a href="#faq">FAQ</a></nav><a className={styles.headerCta} href={contactUrl}>Talk to UNIS <ArrowRight size={16} aria-hidden="true" /></a></header>
  <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}>Ecommerce fulfillment</p><h1>Ecommerce fulfillment built to keep every channel moving</h1><p className={styles.heroLede}>B2C and B2B order fulfillment, inventory, returns, and transportation for growing brands navigating more channels and more operational complexity.</p><div className={styles.actions}><a className={styles.primaryButton} href={contactUrl}>Request a fulfillment assessment <ArrowRight size={18} aria-hidden="true" /></a><a className={styles.secondaryButton} href={locationsUrl}>Explore UNIS locations</a></div></div><div className={styles.heroMedia}><img src="https://cdn.unisco.com/api/assets/images/unis-locations.jpg" alt="Exterior of a UNIS logistics facility" /><div className={styles.heroNote}><span>One operating view</span><strong>Inventory to delivery and return</strong></div></div></section>
  <section className={styles.fit} aria-labelledby="fit-title"><div className={styles.sectionIntro}><p className={styles.eyebrow}>The right fit</p><h2 id="fit-title">Built for the point when fulfillment gets more connected</h2></div><div className={styles.fitList}>{fitSignals.map((signal) => <div key={signal}><span><Check size={15} aria-hidden="true" /></span><p>{signal}</p></div>)}</div></section>
  <section className={styles.capabilities} id="capabilities" aria-labelledby="capabilities-title"><div className={styles.sectionIntro}><p className={styles.eyebrow}>Lifecycle capabilities</p><h2 id="capabilities-title">One flow across the order lifecycle</h2><p>Design the handoffs between inventory, orders, freight, and returns around how your channels actually operate.</p></div><div className={styles.capabilityGrid}>{capabilities.map(({ icon: Icon, number, title, copy }) => <article key={title}><div className={styles.capabilityTop}><Icon size={25} strokeWidth={1.6} aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className={styles.network} id="network" aria-labelledby="network-title"><div className={styles.networkVisual} aria-hidden="true"><div className={styles.networkCore}><Boxes size={29} /><strong>UNIS</strong><span>Operations</span></div><span className={styles.networkLineOne} /><span className={styles.networkLineTwo} /><span className={styles.networkLineThree} /><div className={styles.networkNodeOne}>Orders</div><div className={styles.networkNodeTwo}>Inventory</div><div className={styles.networkNodeThree}>Freight</div></div><div className={styles.networkCopy}><p className={styles.eyebrow}>Network and integrations</p><h2 id="network-title">Connect the physical network to your systems</h2><p>UNIS provides warehousing, fulfillment, transportation, and returns capabilities across its U.S. network. Published integration options include major ERP systems and API, XML, and EDI connectivity.</p><div className={styles.textLinks}><a href="https://www.unisco.com/integrations">Explore integrations <ArrowRight size={16} aria-hidden="true" /></a><a href={locationsUrl}>View the location network <ArrowRight size={16} aria-hidden="true" /></a></div></div></section>
  <section className={styles.confidence} aria-labelledby="confidence-title"><div className={styles.sectionIntro}><p className={styles.eyebrow}>Operating confidence</p><h2 id="confidence-title">A solution shaped around your requirements</h2></div><div className={styles.confidenceGrid}><div><ClipboardCheck size={23} aria-hidden="true" /><h3>Requirements first</h3><p>Channel, product, routing, and service requirements inform the operating design.</p></div><div><Boxes size={23} aria-hidden="true" /><h3>Connected scope</h3><p>Warehouse, transportation, returns, and integration needs are evaluated together.</p></div><div><Route size={23} aria-hidden="true" /><h3>Clear handoffs</h3><p>Implementation planning identifies responsibilities, dependencies, and exception paths.</p></div></div></section>
  <section className={styles.process} id="process" aria-labelledby="process-title"><div className={styles.processHeading}><p className={styles.eyebrow}>Implementation</p><h2 id="process-title">From assessment to launch</h2><p>A structured onboarding path aligns the operation before orders begin moving.</p></div><ol className={styles.processList}>{onboarding.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>
  <section className={styles.faq} id="faq" aria-labelledby="faq-title"><div className={styles.faqHeading}><p className={styles.eyebrow}>FAQ</p><h2 id="faq-title">Questions before an assessment</h2></div><div className={styles.faqList}>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
  <section className={styles.finalCta} aria-labelledby="assessment-title"><p className={styles.eyebrow}>Start with your operation</p><h2 id="assessment-title">Find the right fulfillment fit for what comes next</h2><p>Share your channels, inventory flow, systems, and growth priorities with the UNIS team.</p><a className={styles.lightButton} href={contactUrl}>Request a fulfillment assessment <ArrowRight size={18} aria-hidden="true" /></a></section>
  <footer className={styles.footer}><a href="https://www.unisco.com" aria-label="Visit the UNIS website"><UnisLogo /></a><p>Warehousing, fulfillment, transportation, and returns.</p><div><a href="https://www.unisco.com/our-services">Services</a><a href={locationsUrl}>Locations</a><a href={contactUrl}>Contact</a></div></footer>
</main>; }