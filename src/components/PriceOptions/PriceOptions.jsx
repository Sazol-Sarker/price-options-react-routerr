
import PriceOption from './../PriceOption/PriceOption';

const PriceOptions = () => {
    // data 
    const gyms = [
        {
          id: 1,
          name: "FitFlex Gym",
          features: ["Cardio Equipment", "Personal Training", "Sauna"],
          price: 49.99,
          membership: "Standard",
          location: "New York, NY",
          rating: 4.5,
          open24Hours: true
        },
        {
          id: 2,
          name: "Iron Paradise",
          features: ["Weightlifting", "CrossFit", "Showers"],
          price: 59.99,
          membership: "Premium",
          location: "Los Angeles, CA",
          rating: 4.8,
          open24Hours: false
        },
        {
          id: 3,
          name: "Pulse Fitness",
          features: ["Yoga Classes", "Swimming Pool", "Cafe"],
          price: 39.99,
          membership: "Basic",
          location: "Chicago, IL",
          rating: 4.3,
          open24Hours: false
        },
        {
          id: 4,
          name: "Titan Strength Club",
          features: ["Powerlifting", "Group Classes", "Juice Bar"],
          price: 69.99,
          membership: "VIP",
          location: "Houston, TX",
          rating: 4.7,
          open24Hours: true
        },
        {
          id: 5,
          name: "Zen Wellness Center",
          features: ["Meditation", "Pilates", "Massage Therapy"],
          price: 55.99,
          membership: "Standard",
          location: "San Francisco, CA",
          rating: 4.6,
          open24Hours: false
        },
        {
          id: 6,
          name: "Elite Performance Gym",
          features: ["Strength Training", "Boxing Ring", "Treadmills"],
          price: 65.00,
          membership: "Premium",
          location: "Miami, FL",
          rating: 4.7,
          open24Hours: true
        },
        {
          id: 7,
          name: "Summit Athletic Club",
          features: ["Indoor Track", "Climbing Wall", "Physical Therapy"],
          price: 58.50,
          membership: "Standard",
          location: "Denver, CO",
          rating: 4.4,
          open24Hours: false
        },
        {
          id: 8,
          name: "MetroFit Gym",
          features: ["Zumba Classes", "Rowing Machines", "Steam Room"],
          price: 42.00,
          membership: "Basic",
          location: "Seattle, WA",
          rating: 4.2,
          open24Hours: false
        },
        {
          id: 9,
          name: "Hyper Strength",
          features: ["Calisthenics Park", "TRX Training", "Barbell Club"],
          price: 75.00,
          membership: "VIP",
          location: "Boston, MA",
          rating: 4.9,
          open24Hours: true
        },
        {
          id: 10,
          name: "Peak Fitness Hub",
          features: ["Spin Classes", "High-Altitude Training", "Locker Rooms"],
          price: 50.00,
          membership: "Standard",
          location: "Salt Lake City, UT",
          rating: 4.5,
          open24Hours: true
        },
        {
          id: 11,
          name: "The Body Forge",
          features: ["Strongman Training", "Kettlebell Workouts", "Massage Chairs"],
          price: 68.99,
          membership: "Premium",
          location: "Austin, TX",
          rating: 4.8,
          open24Hours: false
        },
        {
          id: 12,
          name: "Oxygen Fitness",
          features: ["Pilates Studio", "HydroMassage", "Tanning Beds"],
          price: 55.00,
          membership: "Standard",
          location: "Orlando, FL",
          rating: 4.6,
          open24Hours: false
        },
        {
          id: 13,
          name: "Gravity Gym",
          features: ["Bouldering", "Resistance Training", "Obstacle Course"],
          price: 62.50,
          membership: "VIP",
          location: "San Diego, CA",
          rating: 4.7,
          open24Hours: true
        },
        {
          id: 14,
          name: "Muscle Factory",
          features: ["Power Racks", "Olympic Weightlifting", "Protein Bar"],
          price: 79.99,
          membership: "VIP",
          location: "Las Vegas, NV",
          rating: 4.9,
          open24Hours: true
        },
        {
          id: 15,
          name: "Velocity Sports Club",
          features: ["Athletic Performance Training", "Speed Drills", "Agility Courses"],
          price: 70.00,
          membership: "Premium",
          location: "Atlanta, GA",
          rating: 4.7,
          open24Hours: false
        },
        {
          id: 16,
          name: "Titanium Fitness",
          features: ["Cryotherapy", "VR Fitness", "Body Composition Analysis"],
          price: 85.00,
          membership: "VIP",
          location: "San Jose, CA",
          rating: 4.8,
          open24Hours: true
        },
        {
          id: 17,
          name: "Wellness One",
          features: ["Hot Yoga", "Reiki Healing", "Detox Sauna"],
          price: 60.00,
          membership: "Standard",
          location: "Portland, OR",
          rating: 4.5,
          open24Hours: false
        },
        {
          id: 18,
          name: "Evolve Fitness",
          features: ["Aerial Yoga", "Martial Arts", "HIIT Workouts"],
          price: 57.00,
          membership: "Standard",
          location: "Philadelphia, PA",
          rating: 4.6,
          open24Hours: false
        },
        {
          id: 19,
          name: "Gladiator Training Center",
          features: ["MMA Training", "Obstacle Course Racing", "Battle Ropes"],
          price: 90.00,
          membership: "VIP",
          location: "Phoenix, AZ",
          rating: 4.9,
          open24Hours: true
        },
        {
          id: 20,
          name: "Synergy Fitness",
          features: ["Holistic Training", "Mindfulness Coaching", "Infrared Sauna"],
          price: 65.00,
          membership: "Premium",
          location: "Minneapolis, MN",
          rating: 4.4,
          open24Hours: false
        }
      ];
      
      
      
      
      
    return (
        <div className='grid grid-cols-3 border-blue-400 bg-slate-200'>
            {
            gyms.map(option=><PriceOption key={option.id} option={option}> </PriceOption>)
            }
        
        </div>
    );
};

export default PriceOptions;