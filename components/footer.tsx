import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="footer">
      <Socials />
      <p className="has-text-centered mt-4">
        <a
          href="https://onlychai.neocities.org/support.html?name=Kush%20Vasaniya&upi=vasaniyakush-1%40okhdfcbank"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-primary is-small"
        >
          ☕&nbsp; Buy me a Chai
        </a>
      </p>
    </footer>
  );
}
