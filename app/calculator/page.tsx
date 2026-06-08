'use client';

import { useState } from 'react';
import Image from 'next/image';

// Pricing data extracted from source repo
const BREEDS = [
  { id: 1, name: 'Affenpinscher', species: 'dog' },
  { id: 2, name: 'Afghan Hound', species: 'dog' },
  { id: 3, name: 'Airedale Terrier', species: 'dog' },
  { id: 4, name: 'Akita', species: 'dog' },
  { id: 5, name: 'Alaskan Malamute', species: 'dog' },
  { id: 6, name: 'American English Coonhound', species: 'dog' },
  { id: 7, name: 'American Eskimo Dog', species: 'dog' },
  { id: 8, name: 'American Foxhound', species: 'dog' },
  { id: 9, name: 'American Hairless Terrier', species: 'dog' },
  { id: 10, name: 'American Staffordshire Terrier', species: 'dog' },
  { id: 11, name: 'American Water Spaniel', species: 'dog' },
  { id: 12, name: 'Anatolian Shepherd Dog', species: 'dog' },
  { id: 13, name: 'Australian Cattle Dog', species: 'dog' },
  { id: 14, name: 'Australian Shepherd', species: 'dog' },
  { id: 15, name: 'Australian Terrier', species: 'dog' },
  { id: 16, name: 'Azawakh', species: 'dog' },
  { id: 17, name: 'Barbet', species: 'dog' },
  { id: 18, name: 'Basenji', species: 'dog' },
  { id: 19, name: 'Basset Hound', species: 'dog' },
  { id: 20, name: 'Beagle', species: 'dog' },
  { id: 21, name: 'Bearded Collie', species: 'dog' },
  { id: 22, name: 'Beauceron', species: 'dog' },
  { id: 23, name: 'Bedlington Terrier', species: 'dog' },
  { id: 24, name: 'Belgian Laekenois', species: 'dog' },
  { id: 25, name: 'Belgian Malinois', species: 'dog' },
  { id: 26, name: 'Belgian Sheepdog', species: 'dog' },
  { id: 27, name: 'Belgian Tervuren', species: 'dog' },
  { id: 28, name: 'Bergamasco Sheepdog', species: 'dog' },
  { id: 29, name: 'Berger Picard', species: 'dog' },
  { id: 30, name: 'Bernese Mountain Dog', species: 'dog' },
  { id: 31, name: 'Bichon Frise', species: 'dog' },
  { id: 32, name: 'Biewer Terrier', species: 'dog' },
  { id: 33, name: 'Black Russian Terrier', species: 'dog' },
  { id: 34, name: 'Black and Tan Coonhound', species: 'dog' },
  { id: 35, name: 'Bloodhound', species: 'dog' },
  { id: 36, name: 'Bluetick Coonhound', species: 'dog' },
  { id: 37, name: 'Boerboel', species: 'dog' },
  { id: 38, name: 'Border Collie', species: 'dog' },
  { id: 39, name: 'Border Terrier', species: 'dog' },
  { id: 40, name: 'Borzoi', species: 'dog' },
  { id: 41, name: 'Boston Terrier', species: 'dog' },
  { id: 42, name: 'Bouvier des Flandres', species: 'dog' },
  { id: 43, name: 'Boxer', species: 'dog' },
  { id: 44, name: 'Boykin Spaniel', species: 'dog' },
  { id: 45, name: 'Bracco Italiano', species: 'dog' },
  { id: 46, name: 'Briard', species: 'dog' },
  { id: 47, name: 'Brittany', species: 'dog' },
  { id: 48, name: 'Brussels Griffon', species: 'dog' },
  { id: 49, name: 'Bull Terrier', species: 'dog' },
  { id: 50, name: 'Bulldog', species: 'dog' },
  { id: 51, name: 'Bullmastiff', species: 'dog' },
  { id: 52, name: 'Cairn Terrier', species: 'dog' },
  { id: 53, name: 'Canaan Dog', species: 'dog' },
  { id: 54, name: 'Cane Corso', species: 'dog' },
  { id: 55, name: 'Cardigan Welsh Corgi', species: 'dog' },
  { id: 56, name: 'Cavalier King Charles Spaniel', species: 'dog' },
  { id: 57, name: 'Cesky Terrier', species: 'dog' },
  { id: 58, name: 'Chesapeake Bay Retriever', species: 'dog' },
  { id: 59, name: 'Chihuahua', species: 'dog' },
  { id: 60, name: 'Chinese Crested', species: 'dog' },
  { id: 61, name: 'Chinese Shar-Pei', species: 'dog' },
  { id: 62, name: 'Chinook', species: 'dog' },
  { id: 63, name: 'Chow Chow', species: 'dog' },
  { id: 64, name: 'Cirneco dell\'Etna', species: 'dog' },
  { id: 65, name: 'Clumber Spaniel', species: 'dog' },
  { id: 66, name: 'Cocker Spaniel', species: 'dog' },
  { id: 67, name: 'Collie', species: 'dog' },
  { id: 68, name: 'Coton de Tulear', species: 'dog' },
  { id: 69, name: 'Curly-Coated Retriever', species: 'dog' },
  { id: 70, name: 'Dachshund', species: 'dog' },
  { id: 71, name: 'Dalmatian', species: 'dog' },
  { id: 72, name: 'Dandie Dinmont Terrier', species: 'dog' },
  { id: 73, name: 'Doberman Pinscher', species: 'dog' },
  { id: 74, name: 'Dogo Argentino', species: 'dog' },
  { id: 75, name: 'Dogue de Bordeaux', species: 'dog' },
  { id: 76, name: 'English Cocker Spaniel', species: 'dog' },
  { id: 77, name: 'English Foxhound', species: 'dog' },
  { id: 78, name: 'English Setter', species: 'dog' },
  { id: 79, name: 'English Springer Spaniel', species: 'dog' },
  { id: 80, name: 'English Toy Spaniel', species: 'dog' },
  { id: 81, name: 'Entlebucher Mountain Dog', species: 'dog' },
  { id: 82, name: 'Field Spaniel', species: 'dog' },
  { id: 83, name: 'Finnish Lapphund', species: 'dog' },
  { id: 84, name: 'Finnish Spitz', species: 'dog' },
  { id: 85, name: 'Flat-Coated Retriever', species: 'dog' },
  { id: 86, name: 'French Bulldog', species: 'dog' },
  { id: 87, name: 'German Pinscher', species: 'dog' },
  { id: 88, name: 'German Shepherd Dog', species: 'dog' },
  { id: 89, name: 'German Shorthaired Pointer', species: 'dog' },
  { id: 90, name: 'German Wirehaired Pointer', species: 'dog' },
  { id: 91, name: 'Giant Schnauzer', species: 'dog' },
  { id: 92, name: 'Glen of Imaal Terrier', species: 'dog' },
  { id: 93, name: 'Golden Retriever', species: 'dog' },
  { id: 94, name: 'Gordon Setter', species: 'dog' },
  { id: 95, name: 'Grand Basset Griffon Vendeen', species: 'dog' },
  { id: 96, name: 'Great Dane', species: 'dog' },
  { id: 97, name: 'Great Pyrenees', species: 'dog' },
  { id: 98, name: 'Greater Swiss Mountain Dog', species: 'dog' },
  { id: 99, name: 'Greyhound', species: 'dog' },
  { id: 100, name: 'Harrier', species: 'dog' },
  { id: 101, name: 'Havanese', species: 'dog' },
  { id: 102, name: 'Ibizan Hound', species: 'dog' },
  { id: 103, name: 'Icelandic Sheepdog', species: 'dog' },
  { id: 104, name: 'Irish Red and White Setter', species: 'dog' },
  { id: 105, name: 'Irish Setter', species: 'dog' },
  { id: 106, name: 'Irish Terrier', species: 'dog' },
  { id: 107, name: 'Irish Water Spaniel', species: 'dog' },
  { id: 108, name: 'Irish Wolfhound', species: 'dog' },
  { id: 109, name: 'Italian Greyhound', species: 'dog' },
  { id: 110, name: 'Japanese Chin', species: 'dog' },
  { id: 111, name: 'Keeshond', species: 'dog' },
  { id: 112, name: 'Kerry Blue Terrier', species: 'dog' },
  { id: 113, name: 'Komondor', species: 'dog' },
  { id: 114, name: 'Kuvasz', species: 'dog' },
  { id: 115, name: 'Labrador Retriever', species: 'dog' },
  { id: 116, name: 'Lagotto Romagnolo', species: 'dog' },
  { id: 117, name: 'Lakeland Terrier', species: 'dog' },
  { id: 118, name: 'Leonberger', species: 'dog' },
  { id: 119, name: 'Lhasa Apso', species: 'dog' },
  { id: 120, name: 'Lowchen', species: 'dog' },
  { id: 121, name: 'Maltese', species: 'dog' },
  { id: 122, name: 'Manchester Terrier', species: 'dog' },
  { id: 123, name: 'Manchester Terrier (Toy)', species: 'dog' },
  { id: 124, name: 'Mastiff', species: 'dog' },
  { id: 125, name: 'Miniature American Shepherd', species: 'dog' },
  { id: 126, name: 'Miniature Bull Terrier', species: 'dog' },
  { id: 127, name: 'Miniature Pinscher', species: 'dog' },
  { id: 128, name: 'Miniature Schnauzer', species: 'dog' },
  { id: 129, name: 'Mixed Breed', species: 'dog' },
  { id: 130, name: 'Mudi', species: 'dog' },
  { id: 131, name: 'Neapolitan Mastiff', species: 'dog' },
  { id: 132, name: 'Nederlandse Kooikerhondje', species: 'dog' },
  { id: 133, name: 'Newfoundland', species: 'dog' },
  { id: 134, name: 'Norfolk Terrier', species: 'dog' },
  { id: 135, name: 'Norwegian Buhund', species: 'dog' },
  { id: 136, name: 'Norwegian Elkhound', species: 'dog' },
  { id: 137, name: 'Norwegian Lundehund', species: 'dog' },
  { id: 138, name: 'Norwich Terrier', species: 'dog' },
  { id: 139, name: 'Nova Scotia Duck Tolling Retriever', species: 'dog' },
  { id: 140, name: 'Old English Sheepdog', species: 'dog' },
  { id: 141, name: 'Otterhound', species: 'dog' },
  { id: 142, name: 'Papillon', species: 'dog' },
  { id: 143, name: 'Parson Russell Terrier', species: 'dog' },
  { id: 144, name: 'Pekingese', species: 'dog' },
  { id: 145, name: 'Pembroke Welsh Corgi', species: 'dog' },
  { id: 146, name: 'Petit Basset Griffon Vendeen', species: 'dog' },
  { id: 147, name: 'Pharaoh Hound', species: 'dog' },
  { id: 148, name: 'Plott Hound', species: 'dog' },
  { id: 149, name: 'Pointer', species: 'dog' },
  { id: 150, name: 'Polish Lowland Sheepdog', species: 'dog' },
  { id: 151, name: 'Pomeranian', species: 'dog' },
  { id: 152, name: 'Poodle (Miniature)', species: 'dog' },
  { id: 153, name: 'Poodle (Standard)', species: 'dog' },
  { id: 154, name: 'Poodle (Toy)', species: 'dog' },
  { id: 155, name: 'Portuguese Podengo Pequeno', species: 'dog' },
  { id: 156, name: 'Portuguese Water Dog', species: 'dog' },
  { id: 157, name: 'Pug', species: 'dog' },
  { id: 158, name: 'Puli', species: 'dog' },
  { id: 159, name: 'Pumi', species: 'dog' },
  { id: 160, name: 'Pyrenean Shepherd', species: 'dog' },
  { id: 161, name: 'Rat Terrier', species: 'dog' },
  { id: 162, name: 'Redbone Coonhound', species: 'dog' },
  { id: 163, name: 'Rhodesian Ridgeback', species: 'dog' },
  { id: 164, name: 'Rottweiler', species: 'dog' },
  { id: 165, name: 'Russell Terrier', species: 'dog' },
  { id: 166, name: 'Russian Toy', species: 'dog' },
  { id: 167, name: 'Saint Bernard', species: 'dog' },
  { id: 168, name: 'Saluki', species: 'dog' },
  { id: 169, name: 'Samoyed', species: 'dog' },
  { id: 170, name: 'Schipperke', species: 'dog' },
  { id: 171, name: 'Scottish Deerhound', species: 'dog' },
  { id: 172, name: 'Scottish Terrier', species: 'dog' },
  { id: 173, name: 'Sealyham Terrier', species: 'dog' },
  { id: 174, name: 'Shetland Sheepdog', species: 'dog' },
  { id: 175, name: 'Shiba Inu', species: 'dog' },
  { id: 176, name: 'Shih Tzu', species: 'dog' },
  { id: 177, name: 'Siberian Husky', species: 'dog' },
  { id: 178, name: 'Silky Terrier', species: 'dog' },
  { id: 179, name: 'Skye Terrier', species: 'dog' },
  { id: 180, name: 'Sloughi', species: 'dog' },
  { id: 181, name: 'Smooth Fox Terrier', species: 'dog' },
  { id: 182, name: 'Soft Coated Wheaten Terrier', species: 'dog' },
  { id: 183, name: 'Spanish Water Dog', species: 'dog' },
  { id: 184, name: 'Spinone Italiano', species: 'dog' },
  { id: 185, name: 'Staffordshire Bull Terrier', species: 'dog' },
  { id: 186, name: 'Standard Schnauzer', species: 'dog' },
  { id: 187, name: 'Sussex Spaniel', species: 'dog' },
  { id: 188, name: 'Swedish Vallhund', species: 'dog' },
  { id: 189, name: 'Tibetan Mastiff', species: 'dog' },
  { id: 190, name: 'Tibetan Spaniel', species: 'dog' },
  { id: 191, name: 'Tibetan Terrier', species: 'dog' },
  { id: 192, name: 'Toy Fox Terrier', species: 'dog' },
  { id: 193, name: 'Treeing Walker Coonhound', species: 'dog' },
  { id: 194, name: 'Vizsla', species: 'dog' },
  { id: 195, name: 'Weimaraner', species: 'dog' },
  { id: 196, name: 'Welsh Springer Spaniel', species: 'dog' },
  { id: 197, name: 'Welsh Terrier', species: 'dog' },
  { id: 198, name: 'West Highland White Terrier', species: 'dog' },
  { id: 199, name: 'Whippet', species: 'dog' },
  { id: 200, name: 'Wire Fox Terrier', species: 'dog' },
  { id: 201, name: 'Wirehaired Pointing Griffon', species: 'dog' },
  { id: 202, name: 'Wirehaired Vizsla', species: 'dog' },
  { id: 203, name: 'Xoloitzcuintli', species: 'dog' },
  { id: 204, name: 'Yorkshire Terrier', species: 'dog' },
  { id: 205, name: 'Abyssinian', species: 'cat' },
  { id: 206, name: 'American Bobtail', species: 'cat' },
  { id: 207, name: 'American Curl', species: 'cat' },
  { id: 208, name: 'American Shorthair', species: 'cat' },
  { id: 209, name: 'American Wirehair', species: 'cat' },
  { id: 210, name: 'Balinese', species: 'cat' },
  { id: 211, name: 'Bengal', species: 'cat' },
  { id: 212, name: 'Birman', species: 'cat' },
  { id: 213, name: 'Bombay', species: 'cat' },
  { id: 214, name: 'British Shorthair', species: 'cat' },
  { id: 215, name: 'Burmese', species: 'cat' },
  { id: 216, name: 'Burmilla', species: 'cat' },
  { id: 217, name: 'Chartreux', species: 'cat' },
  { id: 218, name: 'Cornish Rex', species: 'cat' },
  { id: 219, name: 'Devon Rex', species: 'cat' },
  { id: 220, name: 'Domestic Longhair', species: 'cat' },
  { id: 221, name: 'Domestic Shorthair', species: 'cat' },
  { id: 222, name: 'Egyptian Mau', species: 'cat' },
  { id: 223, name: 'European Burmese', species: 'cat' },
  { id: 224, name: 'Exotic Shorthair', species: 'cat' },
  { id: 225, name: 'Havana Brown', species: 'cat' },
  { id: 226, name: 'Japanese Bobtail', species: 'cat' },
  { id: 227, name: 'Khao Manee', species: 'cat' },
  { id: 228, name: 'Korat', species: 'cat' },
  { id: 229, name: 'LaPerm', species: 'cat' },
  { id: 230, name: 'Lykoi', species: 'cat' },
  { id: 231, name: 'Maine Coon', species: 'cat' },
  { id: 232, name: 'Manx', species: 'cat' },
  { id: 233, name: 'Norwegian Forest Cat', species: 'cat' },
  { id: 234, name: 'Ocicat', species: 'cat' },
  { id: 235, name: 'Oriental', species: 'cat' },
  { id: 236, name: 'Persian', species: 'cat' },
  { id: 237, name: 'Ragamuffin', species: 'cat' },
  { id: 238, name: 'Ragdoll', species: 'cat' },
  { id: 239, name: 'Russian Blue', species: 'cat' },
  { id: 240, name: 'Scottish Fold', species: 'cat' },
  { id: 241, name: 'Selkirk Rex', species: 'cat' },
  { id: 242, name: 'Siamese', species: 'cat' },
  { id: 243, name: 'Siberian', species: 'cat' },
  { id: 244, name: 'Singapura', species: 'cat' },
  { id: 245, name: 'Somali', species: 'cat' },
  { id: 246, name: 'Sphynx', species: 'cat' },
  { id: 247, name: 'Tonkinese', species: 'cat' },
  { id: 248, name: 'Toybob', species: 'cat' },
  { id: 249, name: 'Turkish Angora', species: 'cat' },
  { id: 250, name: 'Turkish Van', species: 'cat' },
];

const PRICING_TIERS = [
  { name: 'Tiny / Toy / Teacup', sortOrder: 1, minWeight: 1, maxWeight: 10, bathPrice: 50 },
  { name: 'Extra Small', sortOrder: 2, minWeight: 10.1, maxWeight: 20, bathPrice: 55 },
  { name: 'Small', sortOrder: 3, minWeight: 20.1, maxWeight: 35, bathPrice: 60 },
  { name: 'Medium', sortOrder: 4, minWeight: 35.1, maxWeight: 55, bathPrice: 65 },
  { name: 'Large', sortOrder: 5, minWeight: 55.1, maxWeight: 75, bathPrice: 70 },
  { name: 'Extra Large', sortOrder: 6, minWeight: 75.1, maxWeight: 100, bathPrice: 75 },
  { name: 'Giant', sortOrder: 7, minWeight: 100.1, maxWeight: 250, bathPrice: 85 },
];

const PRICING_RULES = {
  bathToBasicGroom: 10,
  basicGroomToFullGroom: 15,
};

interface PricingResult {
  tierName: string;
  prices: Array<{
    serviceName: string;
    price: number;
  }>;
}

function calculatePrice(weight: number): PricingResult | null {
  const tier = PRICING_TIERS.find(
    (t) => weight >= t.minWeight && weight <= t.maxWeight
  );

  if (!tier) return null;

  const bathPrice = tier.bathPrice;
  const basicPrice = bathPrice + PRICING_RULES.bathToBasicGroom;
  const fullPrice = basicPrice + PRICING_RULES.basicGroomToFullGroom;

  return {
    tierName: tier.name,
    prices: [
      { serviceName: 'Bath', price: bathPrice },
      { serviceName: 'Basic Groom', price: basicPrice },
      { serviceName: 'Complete Groom', price: fullPrice },
    ],
  };
}

export default function CalculatorPage() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<PricingResult | null>(null);
  const [error, setError] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const formattedBreeds = BREEDS.sort((a, b) => {
    if (a.species === 'dog' && b.species !== 'dog') return -1;
    if (a.species !== 'dog' && b.species === 'dog') return 1;
    return a.name.localeCompare(b.name);
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!selectedBreed) {
      setError('Please select a breed');
      return;
    }

    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      setError('Please enter a valid weight');
      return;
    }

    if (weightNum > 300) {
      setError('Weight seems too high');
      return;
    }

    setShowDisclaimer(true);
  };

  const handleContinueAfterDisclaimer = () => {
    const weightNum = parseFloat(weight);
    const calculatedResult = calculatePrice(weightNum);

    if (!calculatedResult) {
      setError('Unable to calculate price for this weight');
      setShowDisclaimer(false);
      return;
    }

    setResult(calculatedResult);
    setShowDisclaimer(false);
  };

  const handleReset = () => {
    setSelectedBreed('');
    setWeight('');
    setResult(null);
    setError('');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '240px 20px 120px', position: 'relative', overflow: 'hidden' }}>
      <Image
        src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-camera.jpg"
        alt="Calculator background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        sizes="100vw"
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(248, 248, 248, 0.92)', zIndex: 1 }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .calc-layout {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 48px;
          max-width: 960px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 900px) {
          .calc-layout {
            grid-template-columns: 1fr;
            max-width: 500px;
            gap: 32px;
          }
          .calc-instructions { order: -1; }
        }
      `}} />

      <div className="calc-layout">
        {/* Instructions Panel */}
        <div className="calc-instructions" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', color: '#965B83', marginBottom: '16px', lineHeight: 1.2 }}>
            Get a Price Estimate
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: '16px', color: '#54595F', lineHeight: 1.7, marginBottom: '28px' }}>
            Wondering what grooming will cost for your pet? Use our calculator to get an instant estimate. Just two simple steps:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#965B83', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: '16px' }}>1</div>
              <div>
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '16px', fontWeight: 700, color: '#1F2124', marginBottom: '4px' }}>Select your pet's breed</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: '14px', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>Choose from 200+ dog breeds and 45+ cat breeds in our list.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#965B83', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: '16px' }}>2</div>
              <div>
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '16px', fontWeight: 700, color: '#1F2124', marginBottom: '4px' }}>Enter their weight</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: '14px', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>Type in your pet's weight in pounds. This helps us determine the right pricing tier.</p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(150, 91, 131, 0.08)', borderRadius: '12px', padding: '20px', borderLeft: '4px solid #965B83' }}>
            <h4 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '14px', fontWeight: 700, color: '#965B83', marginBottom: '8px' }}>What's included?</h4>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: '13px', color: '#54595F', lineHeight: 1.6, margin: 0 }}>
              You'll see estimates for three service levels: <strong>Bath</strong>, <strong>Basic Groom</strong> (bath + trim), and <strong>Complete Groom</strong> (full styling). Final pricing is confirmed after an in-person assessment.
            </p>
          </div>
        </div>

      {/* Main Card Container */}
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          padding: '40px',
          position: 'relative' as const,
          zIndex: 2,
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: '24px',
            fontWeight: 600,
            color: '#965B83',
            textAlign: 'center',
            marginBottom: '32px',
            margin: '0 0 32px 0',
          }}
        >
          Grooming Price Calculator
        </h1>
        <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Breed Selection */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '12px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor" />
              </svg>
              Pet Breed
            </label>
            <input
              type="text"
              list="breed-list"
              placeholder="Select a breed..."
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: '16px',
                fontFamily: '"Outfit", sans-serif',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#965B83';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
            />
            <datalist id="breed-list">
              {formattedBreeds.map((breed) => (
                <option key={breed.id} value={breed.name} />
              ))}
            </datalist>
          </div>

          {/* Weight Input */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '12px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor" />
              </svg>
              Pet Weight
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                placeholder="e.g. 25"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 16px',
                  fontSize: '16px',
                  fontFamily: '"Outfit", sans-serif',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                  paddingRight: '50px',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#965B83';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '14px',
                  color: '#9CA3AF',
                  pointerEvents: 'none',
                }}
              >
                lbs
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: '#FEE2E2',
                border: '1px solid #FECACA',
                borderRadius: '12px',
                color: '#DC2626',
                fontSize: '0.9rem',
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '16px 24px',
              backgroundColor: result ? '#e0e0e0' : '#965B83',
              color: result ? '#999' : '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: '"Outfit", sans-serif',
              cursor: result ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
            disabled={!!result}
            onMouseEnter={(e) => {
              if (!result) {
                e.currentTarget.style.backgroundColor = '#7D4969';
              }
            }}
            onMouseLeave={(e) => {
              if (!result) {
                e.currentTarget.style.backgroundColor = '#965B83';
              }
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="currentColor" />
            </svg>
            Calculate Price
          </button>

          {/* Reset Button */}
          {result && (
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: '12px 24px',
                backgroundColor: '#F3F4F6',
                color: '#6B7280',
                border: '1px solid #E5E7EB',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: '"Outfit", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }}
            >
              Clear Pricing
            </button>
          )}
        </form>

        {/* Results */}
        {result && (
          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #E5E7EB' }}>
            <h2
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Estimated Pricing
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '14px',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              {result.tierName} ({weight} lbs)
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {result.prices.map((service) => (
                <div
                  key={service.serviceName}
                  style={{
                    padding: '18px 20px',
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                    e.currentTarget.style.borderColor = '#965B83';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#1F2124',
                        marginBottom: '2px',
                        margin: '0 0 2px 0',
                      }}
                    >
                      {service.serviceName}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '13px',
                        color: '#999',
                        margin: 0,
                      }}
                    >
                      Professional grooming
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#965B83',
                        marginBottom: '2px',
                        margin: '0 0 2px 0',
                      }}
                    >
                      ${service.price.toFixed(2)}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '12px',
                        color: '#BBB',
                      }}
                    >
                      estimated
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '12px',
                color: '#999',
                textAlign: 'center',
                marginTop: '20px',
                fontStyle: 'italic',
                margin: '20px 0 0 0',
              }}
            >
              * Every pet is unique. All grooming prices are estimates only.
            </p>

            {/* Book Now CTA */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="https://www.thedoghouseps.com/appointment-request/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '16px 24px',
                  backgroundColor: '#965B83',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7D4969';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#965B83';
                }}
              >
                Book Appointment Now
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
          onClick={() => setShowDisclaimer(false)}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '16px',
                margin: '0 0 16px 0',
              }}
            >
              Important Notice
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              Every pet is unique. All grooming prices provided are estimates only and are not guaranteed. Final pricing is determined after your pet is weighed and our groomer completes an in-person visual assessment. Factors such as breed, size, coat condition, and behavior may affect the final cost. We will always review and confirm the final price with you before beginning any grooming services.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowDisclaimer(false)}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#F3F4F6',
                  color: '#666',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E5E7EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3F4F6';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleContinueAfterDisclaimer}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#965B83',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7D4969';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#965B83';
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
