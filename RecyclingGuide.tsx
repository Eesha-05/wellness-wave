
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

// Material types with their recycling info
const materials = [
  {
    id: 1,
    name: "Plastic Bottles",
    category: "plastic",
    recyclable: true,
    preparation: "Rinse, remove caps, flatten if possible",
    notes: "Check for recycling symbol (usually #1 PET or #2 HDPE)",
    image: "https://placehold.co/80x80/4ade80/FFFFFF?text=PET",
  },
  {
    id: 2,
    name: "Cardboard",
    category: "paper",
    recyclable: true,
    preparation: "Remove tape, flatten boxes",
    notes: "Keep dry and clean",
    image: "https://placehold.co/80x80/f59e0b/FFFFFF?text=CARD",
  },
  {
    id: 3,
    name: "Aluminum Cans",
    category: "metal",
    recyclable: true,
    preparation: "Rinse, crush if possible to save space",
    notes: "One of the most efficient materials to recycle",
    image: "https://placehold.co/80x80/60a5fa/FFFFFF?text=ALU",
  },
  {
    id: 4,
    name: "Glass Bottles",
    category: "glass",
    recyclable: true,
    preparation: "Rinse, remove caps and lids",
    notes: "Sort by color if required in your area",
    image: "https://placehold.co/80x80/a78bfa/FFFFFF?text=GLASS",
  },
  {
    id: 5,
    name: "Styrofoam",
    category: "plastic",
    recyclable: false,
    preparation: "Not typically recyclable in most programs",
    notes: "Check for specialized drop-off locations",
    image: "https://placehold.co/80x80/f87171/FFFFFF?text=FOAM",
  },
  {
    id: 6,
    name: "Pizza Boxes",
    category: "paper",
    recyclable: false,
    preparation: "Soiled with food and grease cannot be recycled",
    notes: "Clean portions can be torn off and recycled",
    image: "https://placehold.co/80x80/f87171/FFFFFF?text=PIZZA",
  },
  {
    id: 7,
    name: "Batteries",
    category: "hazardous",
    recyclable: true,
    preparation: "Never place in regular recycling or trash",
    notes: "Requires special handling at hazardous waste collection points",
    image: "https://placehold.co/80x80/fbbf24/FFFFFF?text=BATT",
  },
  {
    id: 8,
    name: "Aluminum Foil",
    category: "metal",
    recyclable: true,
    preparation: "Clean thoroughly, ball up multiple pieces",
    notes: "Must be clean of food residue",
    image: "https://placehold.co/80x80/60a5fa/FFFFFF?text=FOIL",
  },
];

const RecyclingGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter materials based on search and category
  const filteredMaterials = materials.filter((material) => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Material categories
  const categories = [
    { id: "all", name: "All Materials" },
    { id: "plastic", name: "Plastics" },
    { id: "paper", name: "Paper & Cardboard" },
    { id: "metal", name: "Metals" },
    { id: "glass", name: "Glass" },
    { id: "hazardous", name: "Hazardous" },
  ];

  // Recycling tips
  const recyclingTips = [
    "Rinse containers to remove food residue.",
    "Remove lids and caps from bottles before recycling.",
    "Flatten cardboard boxes to save space.",
    "Don't bag recyclables unless required by your local program.",
    "Check local guidelines as recycling rules vary by location.",
    "Don't wishcycle - when in doubt, check or leave it out.",
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recycling Guidelines</CardTitle>
          <CardDescription>Learn how to properly recycle different materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden">
                <div className="flex p-4">
                  <div className="mr-4 flex-shrink-0">
                    <img 
                      src={material.image} 
                      alt={material.name} 
                      className="h-16 w-16 rounded-md object-cover" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{material.name}</h4>
                    <Badge
                      variant={material.recyclable ? "default" : "destructive"}
                      className="mb-2"
                    >
                      {material.recyclable ? "Recyclable" : "Not Recyclable"}
                    </Badge>
                    <p className="text-xs text-muted-foreground mb-1">
                      {material.preparation}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Info className="h-3 w-3 mr-1" />
                      <span>{material.notes}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-8">
              <AlertTriangle className="mx-auto h-8 w-8 text-amber-500 mb-2" />
              <p className="text-muted-foreground">No materials found. Try adjusting your search.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Do's and Don'ts</CardTitle>
            <CardDescription>Quick reference guide for proper recycling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-green-600 font-medium flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Do Recycle
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>Clean plastic bottles and containers</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>Paper, newspaper, and magazines</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>Flattened cardboard and paperboard</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>Metal food cans (tin, aluminum, steel)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>Glass bottles and jars</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-red-600 font-medium flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  Don't Recycle
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                    <span>Food-soiled paper or cardboard</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                    <span>Plastic bags and film</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                    <span>Styrofoam and packing peanuts</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                    <span>Electronics and batteries</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✗</div>
                    <span>Medical waste and diapers</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tips for Better Recycling</CardTitle>
            <CardDescription>Improve your recycling habits</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recyclingTips.map((tip, index) => (
                <li key={index} className="flex items-start text-sm">
                  <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecyclingGuide;
