﻿using Grayjay.ClientServer.Models.History;
using Grayjay.ClientServer.Serializers;
using Grayjay.Engine.Models.Feed;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Grayjay.ClientServer.Database.Indexes
{
    public class DBHistoryIndex: DBIndex<HistoryVideo>
    {
        public const string TABLE_NAME = "history";

        private static JsonSerializerOptions _serializerOptions = new JsonSerializerOptions();
        static DBHistoryIndex()
        {
            _serializerOptions.Converters.Add(new PlatformContentConverter());
        }


        [Indexed]
        [Order(1, Ordering.Ascending)]
        public override long ID { get; set; }


        [Indexed]
        public string Url { get; set; }

        [Indexed]
        public long Position { get; set; }

        [Indexed]
        [Order(0, Ordering.Descending)]
        public DateTime DateTime { get; set; }

        [Indexed]
        public string Name { get; set; }


        public DBHistoryIndex() { }
        public DBHistoryIndex(HistoryVideo content)
        {
            FromObject(content);
        }

        public override HistoryVideo Deserialize()
        {
            string str = Encoding.UTF8.GetString(Serialized);
            return JsonSerializer.Deserialize<HistoryVideo>(str, _serializerOptions);
        }

        public override void FromObject(HistoryVideo content)
        {
            Url = content.Video.Url;
            Position = content.Position;
            DateTime = content.Date;
            Name = content.Video.Name;
            Serialized = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(content));
        }
    }
}
