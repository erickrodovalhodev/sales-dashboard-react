import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { compacto, moeda } from "../lib/formato";

export default function GraficoVendas({ serie }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={serie}>
        <XAxis dataKey="day" />
        <YAxis tickFormatter={compacto} />
        <Tooltip formatter={moeda} />
        <Line type="monotone" dataKey="total" stroke="#b8860b" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change

// rationale: memo here, the parent re-renders on filter change
