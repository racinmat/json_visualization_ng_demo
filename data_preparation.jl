using JSON, JsonGrinder, Serialization

data = open("some_data.json", "r") do f
    JSON.parse(f)
end

JsonGrinder.updatemaxkeys!(10_000)
sch = JsonGrinder.schema([data])
open("src/assets/events_schema.json", "w") do f
    write(f, JSON.json(sch))
end

sch2 = deserialize("schema.jls")
# this makes resulting JSON < 100MB in size
delete!(sch2[:behavior][:processes].items.childs, :calls)

open("src/assets/reddit_cuckoo_schema.json", "w") do f
    write(f, JSON.json(sch2))
end
