"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, Flame, Car, Plane, Bus, CreditCard, ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function Calculator() {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = [
    { icon: Zap, label: "Electricity", unit: "kWh", placeholder: "Enter usage in kWh" },
    { icon: Flame, label: "Natural Gas", unit: "m³", placeholder: "Enter usage in cubic meters" },
    { icon: Car, label: "Fuel", unit: "L", placeholder: "Enter usage in liters" },
    { icon: Car, label: "Cars", unit: "km", placeholder: "Enter distance in kilometers" },
    { icon: Plane, label: "Flights", unit: "km", placeholder: "Enter flight distance in kilometers" },
    { icon: Bus, label: "Public Transport", unit: "km", placeholder: "Enter distance in kilometers" },
    { icon: CreditCard, label: "Spend", unit: "Rupees", placeholder: "Enter amount spent" },
  ]

  const getCategoryDetails = () => {
    return categories.find((cat) => cat.label === selectedCategory) || categories[0]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Carbon Footprint Calculator</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex items-center relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  step >= 1 ? "bg-green-600 text-white" : "bg-gray-200"
                }`}
              >
                {step > 1 ? <Check className="w-5 h-5" /> : "1"}
              </div>
              <div className="text-sm ml-3">Select Form</div>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step > 1 ? "bg-green-600" : "bg-gray-200"}`} />
            <div className="flex items-center relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  step >= 2 ? "bg-green-600 text-white" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <div className="text-sm ml-3">Input Data</div>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step > 2 ? "bg-green-600" : "bg-gray-200"}`} />
            <div className="flex items-center relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  step >= 3 ? "bg-green-600 text-white" : "bg-gray-200"
                }`}
              >
                3
              </div>
              <div className="text-sm ml-3">Review</div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-2xl font-semibold">Select Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedCategory === category.label ? "border-green-500 bg-green-50" : "hover:border-green-500"
                    }`}
                    onClick={() => setSelectedCategory(category.label)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-50 p-2 rounded-lg">
                        <category.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{category.label}</h3>
                        <p className="text-sm text-gray-500">Unit: {category.unit}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-2xl font-semibold">{getCategoryDetails().label} Usage</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Number of People in Household</Label>
                  <Input type="number" placeholder="Enter the number of people" min="1" />
                </div>

                <div className="space-y-2">
                  <Label>{`${getCategoryDetails().label} Usage (${getCategoryDetails().unit})`}</Label>
                  <Input type="number" placeholder={getCategoryDetails().placeholder} />
                </div>

                <div className="space-y-2">
                  <Label>Comments</Label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Add any additional comments..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button variant="outline" disabled>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            <Button className="bg-green-600 hover:bg-green-700" onClick={() => step < 3 && setStep(step + 1)}>
              {step === 2 ? "Calculate & add to footprint" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

