// Define branded types for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // branding property
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // branding property
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

