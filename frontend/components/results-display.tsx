"use client";

import React from "react";
import Image from "next/image";

interface NutritionItem {
  food_name: string;
  serving_description: string;
  calories: number;
  protein_grams: number;
  carb_grams: number;
  fat_grams: number;
  confidence_level: string;
}

interface NutritionResultProps {
  preview?: string | null;
  type: string;
  items: NutritionItem[];
  overall_confidence: string;
}

export default function ResultsDisplay({
  preview,
  type,
  items,
  overall_confidence,
}: NutritionResultProps) {
  return (
    <div className="w-full bg-slate-800/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-slate-700/50 mt-6">

      {/* Image Preview */}
      {preview && (
        <div className="w-full flex justify-center mb-4">
          <Image
            src={preview}
            alt="meal"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      )}

      <h2 className="text-xl font-bold text-emerald-400 mb-2 text-center">
        Analysis Result
      </h2>

      <p className="text-slate-300 text-center mb-6">
        Food Type: <span className="text-emerald-400">{type}</span>  
        • Confidence: <span className="text-emerald-400">{overall_confidence}</span>
      </p>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-slate-900/40 p-5 rounded-xl border border-slate-700/40 shadow-md"
          >
            <h3 className="text-lg font-semibold text-emerald-300">
              {item.food_name}
            </h3>

            <p className="text-sm text-slate-400 mb-3">
              {item.serving_description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <p className="text-emerald-300 font-bold">{item.calories}</p>
                <p className="text-slate-400 text-xs">Calories</p>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <p className="text-emerald-300 font-bold">{item.protein_grams}g</p>
                <p className="text-slate-400 text-xs">Protein</p>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <p className="text-emerald-300 font-bold">{item.carb_grams}g</p>
                <p className="text-slate-400 text-xs">Carbs</p>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                <p className="text-emerald-300 font-bold">{item.fat_grams}g</p>
                <p className="text-slate-400 text-xs">Fat</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs mt-3 text-center">
              Confidence:{" "}
              <span className="text-emerald-400">{item.confidence_level}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
