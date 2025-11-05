"use client";
import { useEffect, useRef } from "react";

export default function ProfitChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // dummy data
    const profits = [21000, 22000, 19500, 23000, 24320];
    const labels = ["Jun", "Jul", "Aug", "Sep", "Oct"];

    const maxProfit = Math.max(...profits);
    const chartHeight = 140;
    const barWidth = 60;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw axes
    ctx.strokeStyle = "#334";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, chartHeight + 40);
    ctx.lineTo(canvas.width - 20, chartHeight + 40);
    ctx.stroke();

    // draw bars
    profits.forEach((value, i) => {
      const x = 70 + i * (barWidth + 25);
      const barHeight = (value / maxProfit) * chartHeight;
      const y = chartHeight + 40 - barHeight;
      ctx.fillStyle = "#FFD53D";
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = "#fff";
      ctx.font = "12px sans-serif";
      ctx.fillText(labels[i], x + 10, chartHeight + 60);
    });

    // animate line trend
    ctx.beginPath();
    ctx.strokeStyle = "#00FF88";
    ctx.lineWidth = 2;
    profits.forEach((value, i) => {
      const x = 70 + i * (barWidth + 25) + barWidth / 2;
      const y = chartHeight + 40 - (value / maxProfit) * chartHeight;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-12 mb-12">
      <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
        Profit Trend (Last 5 Months)
      </h2>
      <canvas
        ref={canvasRef}
        width={500}
        height={220}
        className="bg-[#111b2d] rounded-2xl shadow-lg"
      ></canvas>
    </div>
  );
}
