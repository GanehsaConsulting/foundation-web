export default function ArtikelPage() {
    return (
        <>
            <div className="margin mt-10 space-y-3">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-9">
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <select className="p-2 border rounded">
                            <option value="">Filter</option>
                            <option value="terbaru">Terbaru</option>
                            <option value="populer">Populer</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
