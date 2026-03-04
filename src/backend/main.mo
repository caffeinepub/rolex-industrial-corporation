import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Nat "mo:core/Nat";

actor {
  // Data Types
  type Quote = {
    id : Nat;
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    productInterest : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Quote {
    public func compare(quote1 : Quote, quote2 : Quote) : Order.Order {
      Nat.compare(quote1.id, quote2.id);
    };
  };

  type ContactInfo = {
    addresses : [Text];
    phones : [Text];
    emails : [Text];
  };

  // State
  var nextQuoteId = 0;
  let quotes = Map.empty<Nat, Quote>();

  let contactInfo : ContactInfo = {
    addresses = [
      "123 Industrial Park, Suite 100",
      "456 Manufacturing Ave., Floor 2",
    ];
    phones = ["+1 800 555 1234", "+1 800 555 5678"];
    emails = ["info@rolexindustrial.com", "sales@rolexindustrial.com"];
  };

  // Public Methods
  public shared ({ caller }) func submitQuote(
    name : Text,
    company : Text,
    email : Text,
    phone : Text,
    productInterest : Text,
    message : Text,
  ) : async Nat {
    let quote : Quote = {
      id = nextQuoteId;
      name;
      company;
      email;
      phone;
      productInterest;
      message;
      timestamp = Time.now();
    };

    quotes.add(nextQuoteId, quote);
    nextQuoteId += 1;
    quote.id;
  };

  public query ({ caller }) func getAllQuotes() : async [Quote] {
    quotes.values().toArray().sort();
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };
};
